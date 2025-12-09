import emailjs from "@emailjs/browser";

// Load from .env file (Vite)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendMail = async (form) => {
  const templateParams = {
    name: form.name,
    phone: form.phone,
    email: form.email,
    city: form.city || "Not provided",
    pincode: form.pincode || "Not provided",
    loanType: form.loanType || "Not specified",
    employmentType: form.employmentType || "Not specified",
    earning: form.earning || "Not specified",
    message: form.message || "No additional message",
    date: new Date().toLocaleString(),
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
