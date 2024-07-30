import User from "@/models/User";
import { emailTemplate } from '@/temeplete/emailTemplate';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

interface EmailProps {
    email: string;
    emailType: string;
    userId: string;
    token?: string;
}

export const sendEmail = async ({ email, emailType, userId }: EmailProps) => {
    try {
        // create a hased token
        const hashedToken = jwt.sign({ email, userId }, process.env.NEXT_PUBLIC_JWT_SECRET!, { expiresIn: "1min" });

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.NEXT_PUBLIC_USERNAME,
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        });


        const mailOptions = {
            from: process.env.NEXT_PUBLIC_REPLY_EMAIL,
            to: email,
            subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
            html: emailTemplate(hashedToken, emailType)
        };

        const mailresponse = await transport.sendMail
            (mailOptions);
        return mailresponse;

    } catch (error: any) {
        throw new Error(error.message);
    }
}