import emailjs from "emailjs-com";

export const sendMail = async (data) => {
  const serviceID = "service_zehtcz2";
  const templateID = "YOUR_TEMPLATE_ID";
  const publicKey = "YOUR_PUBLIC_KEY";

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      data,
      publicKey
    );
    return response;
  } catch (error) {
    throw error;
  }
};
