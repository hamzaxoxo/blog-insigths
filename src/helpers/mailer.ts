import User from "@/models/User";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { emailTemplate } from "../temeplete/emailTemplate";

interface EmailProps {
    name: string;
    email: string;
    emailType: string;
    userId: string;
}

export const sendEmail = async ({ email, emailType, userId, name }: EmailProps) => {
    try {
        const token = jwt.sign({ email, userId }, process.env.NEXT_PUBLIC_JWT_SECRET!, { expiresIn: "1m" });

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                { verifyToken: token, verifyTokenExpiry: Date.now() + 60000 })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                { forgotPasswordToken: token, forgotPasswordTokenExpiry: Date.now() + 60000 })
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
            html: emailTemplate(token, emailType, name)
        };
        const mailresponse = await transporter.sendMail(options);
        return mailresponse;

    } catch (error: any) {
        throw new Error(error.message);
    }
}