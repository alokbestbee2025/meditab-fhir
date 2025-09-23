import { sendEmail } from "~/utils/emailConfig";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // Validate required fields
    if (!body.email || !body.firstName || !body.lastName) {
      throw createError({
        statusCode: 400,
        message: 'Missing required field'
      });
    }

    // Send email
    await sendEmail(body);

    return {
      statusCode: 200,
      body: { 
        message: "Form submitted successfully!" 
      }
    };
    
  } catch (error) {
    console.error('Server error:', error);
    
    throw createError({
      statusCode: 500,
      message: error.message || "Internal server error"
    });
  }
});