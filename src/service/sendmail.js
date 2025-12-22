import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER;
const TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmails = async (formData) => {
  try {
    // 1. Send Notification to OWNER (Admin)
    const ownerEmailPromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_OWNER,
      {
        // Basic Info
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        city: formData.city,
        pincode: formData.pincode,
        
        // Loan & Financials
        loan_type: formData.loanType,
        earning: formData.earning,
        
        // --- NEW FIELDS MAPPING ---
        pan_card: formData.panCard,
        existing_loan: formData.existingLoan,
        
        // Employment Details
        employment_type: formData.employmentType,
        
        // Conditional Fields (Send "N/A" if empty to avoid blank spots in email)
        company_name: formData.companyName || "N/A",
        sector: formData.sector || "N/A",
        business_name: formData.businessName || "N/A",
      },
      PUBLIC_KEY
    );

    // 2. Send Welcome Email to USER (Customer)
    const userWelcomePromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_USER,
      {
        to_email: formData.email,   
        to_name: formData.name,     
        loan_type: formData.loanType,
        // You generally don't need to send the detailed financial info back to the user
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