import { sendEmail } from "~/utils/emailConfig";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate required fields
    if (
      !body.email ||
      !body.companyName ||
      !body.fullName ||
      !body.designation ||
      !body.stateType ||
      !body.entityType ||
      !body.legalAddress ||
      !body.termsStatus
    ) {
      throw createError({
        statusCode: 400,
        message: "Missing required field",
      });
    }

    // Send email
    await sendEmail(body);

    return {
      message: "Form submitted successfully!",
    };
  } catch (error) {
    console.error("Server error:", error);

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error",
    });
  }
});
