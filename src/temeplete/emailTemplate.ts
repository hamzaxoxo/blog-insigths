export const emailTemplate = (token: string, emailType: string, name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${emailType === "VERIFY" ? "Email Confirmation" : "Reset Password"}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
        }
        .container {
            max-width: 640px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        header img {
            height: 40px;
        }
        h2 {
            color: #4a5568;
        }
        p {
            margin-top: 16px;
            line-height: 1.5;
            color: #718096;
        }
        .font-semibold {
            font-weight: 600;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 14px;
            font-weight: 500;
            color: white;
            background-color: #3182ce;
            border-radius: 6px;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #2b6cb0;
        }
        footer p {
            margin-top: 20px;
            color: #a0aec0;
            font-size: 14px;
        }
        footer a {
            color: #3182ce;
            text-decoration: none;
        }
        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <a href="#">
                <img src="${process.env.PRODUCTION_URL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ac3552e7.png&w=640&q=75" alt="Blog Insigths Logo">
            </a>
        </header>

        <main>
            <h2>Hi ${name},</h2>
            <p>
                You're almost there! Just one more step to go. Click the button below to verify your email address and start using <span class="font-semibold">Blog Insigths</span>.
            </p>
            <a href="${process.env.PRODUCTION_URL}/auth/verifyemail?token=${token}" class="button">Verify Now</a>
            <p>
                Thanks, <br>
                Blog Insigths team
            </p>
        </main>

        <footer>
            <p>© <script>document.write(new Date().getFullYear());</script> Blog Insigths. All Rights Reserved.</p>
        </footer>
    </div>
</body>
</html>

`;
