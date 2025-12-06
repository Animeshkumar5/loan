import emailjs from "@emailjs/browser";

// Your actual EmailJS keys
const SERVICE_ID = "service_eck2wy1";
const TEMPLATE_ID = "template_07ubz0e"; 
const PUBLIC_KEY = "NWu5aFs5Ta1MfNrbN";

export const sendMail = async (form) => {
  const templateParams = {
    name: form.name,
    phone: form.phone,
    email: form.email,
    location: form.location,
    amount: form.amount,
    loanType: form.loanType,
    message: form.message || "No message",
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