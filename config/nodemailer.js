import nodemailer from 'nodemailer';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASWWORD
    },
});

export const mailOptions = {
    from: process.env.EMAIL,
}