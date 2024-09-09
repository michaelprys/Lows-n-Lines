import { pool } from "~~/server/utils/db";
import { MessageSchema } from "~/utils/schemas";
import { safeParse } from "valibot";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    console.log("Server-side received body:", body);
    const validation = safeParse(MessageSchema, body);
    if (!validation.success) {
        throw createError({
            statusCode: 400,
            statusMessage: "Validation error",
            message: `Validation error: ${validation.issues.map((issue, idx) => `${idx + 1}. ${issue.message}`).join(", ")}`,
        });
    }

    const { firstname, lastname, phoneNumber, email, message, subject } = body;

    const subjectHtml = subject
        ? `<p><strong>Subject:</strong> ${subject}</p>`
        : "";

    const conn = await pool.connect();

    try {
        const { user, appPassword, emailPort } = useRuntimeConfig();
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: parseInt(emailPort),
            secure: false,
            auth: {
                user: user,
                pass: appPassword,
            },
        });

        const info = await transporter.sendMail({
            from: {
                name: `${firstname} ${lastname}`,
                address: email,
            },
            to: "flowersjustin09123@gmail.com",
            subject: "Service Inquiry",
            text: message,
            html: `
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                ${subjectHtml}
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        console.log("Message sent: %s", info.messageId);

        setResponseStatus(event, 200, "Massage was sent");
    } catch (err) {
        throw createError({
            statusCode: 500,
            statusMessage: `Server error ${err.message}`,
        });
    } finally {
        conn.release();
    }
});
