import { sendEmail } from "~/utils/emailConfig";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    // Process the form data
    await sendEmail(body); // Implement this function to send emails
    return { message: "Form submitted successfully!" };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return { statusCode: 500, message: "An error occurred while processing your request." };
  }
});