import { pool } from '~~/server/utils/db';
import { generateResetToken } from '~~/server/utils/crypto';
import { EmailSchema } from '~/utils/schemas';
import { safeParse } from 'valibot';
import nodemailer from 'nodemailer';

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const validation = safeParse(EmailSchema, body);

    if (!validation.success) {
        throw createError({
            statusCode: 400,
            message: 'Invalid email format',
        });
    }
    const email = body.email;

    const conn = await pool.connect();

    try {
        const res = await conn.query('SELECT id FROM users WHERE email = $1', [email]);

        if (res.rows.length === 0) {
            throw createError({
                statusCode: 404,
                message: 'User with this email does not exist',
            });
        }

        const resetToken = generateResetToken();

        const tokenExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24);

        await conn.query('UPDATE users SET reset_token = $1, reset_token_expires_at = $2 WHERE email = $3', [
            resetToken,
            tokenExpiresAt,
            email,
        ]);

        const { user, appPassword, emailPort, appUrl } = useRuntimeConfig();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: parseInt(emailPort),
            secure: false,
            auth: {
                user,
                pass: appPassword,
            },
        });

        const resetUrl = `${appUrl}/reset-password/edit?reset-token=${resetToken}`;

        await transporter.sendMail({
            from: `"Lows-n-Lines" <${user}`,
            to: email,
            subject: 'Password Reset',
            text: `Click on the link to reset your password: ${resetUrl}`,
            html: `
                        <p>Click on the link to reset your password:</p><a href="${resetUrl}">${resetUrl}</>
                    `,
        });

        return {
            message: 'Link sent to your email',
        };
    } catch (e) {
        throw createError({
            statusCode: 500,
            message: 'Something went wrong',
        });
    } finally {
        conn.release();
    }
});
