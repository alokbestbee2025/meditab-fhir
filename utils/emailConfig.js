import nodemailer from "nodemailer";


async function sendNotificationEmail(formData, transporter) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    cc: process.env.EMAIL_CC,
    subject: "Meditab FHIR Registration Form Submission",
    text: `
New registration from: ${formData.email}

Details:
Name of the signatory/requestor: ${formData.fullName}
Legal name of the organization: ${formData.companyName}
Email Address of the signatory/requestor:: ${formData.email}
Designation of signatory/requestor:: ${formData.designation}
State of Formation/Organization:: ${formData.stateType}
Entity Type: ${formData.entityType}
Registered Legal Address: ${formData.legalAddress}
Terms & Condition: ${formData.termsStatus}
    `,
    html: `
<h2>Meditab FHIR Registration</h2>
<p><strong>From:</strong> ${formData.email}</p>
<h3>Details:</h3>
<p><strong>Legal name of the organization:</strong> ${formData.companyName}</p>
<p><strong>Name of the signatory/requestor:</strong> ${formData.fullName}</p>
<p><strong>Email Address of the signatory/requestor:</strong> ${formData.email}</p>
<p><strong>Designation of signatory/requestor:</strong> ${formData.designation}</p>
<p><strong>State of Formation/Organization:</strong> ${formData.stateType}</p>
<p><strong>Entity Type:</strong> ${formData.entityType}</p>
<p><strong>Registered Legal Address:</strong> ${formData.legalAddress}</p>
<p><strong>Terms & Condition: ${formData.termsStatus}</p>
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
Dear ${formData.fullName},

Thank you for registering with us. We have received your information and will get back to you soon.

Best regards,
Your Company Name
    `,
    html: `
<h2>Thank you for your registration</h2>
<p>Dear ${formData.fullName},</p>
<p>Thank you for registering with us. We have received your information and will get back to you soon.</p>
<p>Best regards,<br>Your Company Name</p>
    `
  };

  await transporter.sendMail(mailOptions);
  console.log("Confirmation email sent to user");
}

export async function sendEmail(formData) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
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