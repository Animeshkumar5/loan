import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER;
const TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmails = async (formData) => {
  try {
    // 1. Send Notification to OWNER
    const ownerEmailPromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_OWNER,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        city: formData.city,
        pincode: formData.pincode,
        loan_type: formData.loanType,
        employment_type: formData.employmentType,
        earning: formData.earning,
      },
      PUBLIC_KEY
    );

    // 2. Send Welcome Email to USER
    const userWelcomePromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_USER,
      {
        // --- FIX IS HERE ---
        // Your screenshot shows {{to_email}} in the "To Email" box.
        // So we MUST send the data as 'to_email'.
        to_email: formData.email,   
        
        // Your body content uses {{to_name}}
        to_name: formData.name,     
        
        loan_type: formData.loanType,
      },
      PUBLIC_KEY
    );

    await Promise.all([ownerEmailPromise, userWelcomePromise]);
    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};