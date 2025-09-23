import { d as defineEventHandler, r as readBody, c as createError } from '../../_/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'node:crypto';

async function sendNotificationEmail(formData, transporter) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "New Registration Form Submission",
    text: `
New registration from: ${formData.email}

Details:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Product: ${formData.product}
Phone: ${formData.phone}
Country: ${formData.country}
Message: ${formData.message}
    `,
    html: `
<h2>New Registration</h2>
<p><strong>From:</strong> ${formData.email}</p>
<h3>Details:</h3>
<p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Product:</strong> ${formData.product}</p>
<p><strong>Phone:</strong> ${formData.phone}</p>
<p><strong>Country:</strong> ${formData.country}</p>
<p><strong>Message:</strong> ${formData.message}</p>
    `
  };
  await transporter.sendMail(mailOptions);
  console.log("Notification email sent to admin");
}
async function sendConfirmationEmail(formData, transporter) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: formData.email,
    subject: "Thank you for your registration",
    text: `
Dear ${formData.firstName} ${formData.lastName},

Thank you for registering with us. We have received your information and will get back to you soon.

Best regards,
Your Company Name
    `,
    html: `
<h2>Thank you for your registration</h2>
<p>Dear ${formData.firstName} ${formData.lastName},</p>
<p>Thank you for registering with us. We have received your information and will get back to you soon.</p>
<p>Best regards,<br>Your Company Name</p>
    `
  };
  await transporter.sendMail(mailOptions);
  console.log("Confirmation email sent to user");
}
async function sendEmail(formData) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  try {
    await sendNotificationEmail(formData, transporter);
    await sendConfirmationEmail(formData, transporter);
    console.log("Both emails sent successfully");
  } catch (error) {
    console.error("Error sending emails:", error);
    throw error;
  }
}

const contactMail = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.firstName || !body.lastName) {
      throw createError({
        statusCode: 400,
        message: "Missing required field"
      });
    }
    await sendEmail(body);
    return {
      statusCode: 200,
      body: {
        message: "Form submitted successfully!"
      }
    };
  } catch (error) {
    console.error("Server error:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Internal server error"
    });
  }
});

export { contactMail as default };
//# sourceMappingURL=contact-mail.mjs.map
