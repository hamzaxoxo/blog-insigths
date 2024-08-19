import User from "@/models/User";
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';
import { emailTemplate } from "../temeplete/emailTemplate";
import { v4 as uuidv4 } from 'uuid';

interface EmailProps {
    name: string;
    email: string;
    emailType: string;
    userId: string;
}

export const sendEmail = async ({ email, emailType, userId, name }: EmailProps) => {
    try {
        const hashedToken = uuidv4().toString();

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 }, { new: true })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 }, { new: true })
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
                pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
            },
        });

        const options = {
            from: 'no-reply@bloginsigths.com',
            to: email,
            subject: emailType === "VERIFY"
                ? "Verify Your Email Address" : "Reset Your Password",
            html: emailTemplate(hashedToken, emailType, name)
        };
        const mailresponse = await transporter.sendMail(options);
        return mailresponse;

    } catch (error: any) {
        throw new Error(error.message);
    }
}