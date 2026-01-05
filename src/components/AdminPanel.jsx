import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx"; // Import the Excel library

export default function AdminPanel() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to fetch data from Firestore
  const fetchEnquiries = async () => {
    try {
      const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEnquiries(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // --- NEW: Function to Export Data to Excel ---
  const handleExportToExcel = () => {
    // 1. Format the data for the Excel sheet
    const excelData = enquiries.map((person) => ({
      Date: person.createdAt?.seconds 
        ? new Date(person.createdAt.seconds * 1000).toLocaleDateString() 
        : "N/A",
      Name: person.name,
      Mobile: person.phone,
      Email: person.email,
      City: person.city,
      Pincode: person.pincode,
      PAN_Card: person.panCard,
      Existing_Loan: person.existingLoan,
      Loan_Type: person.loanType,
      Employment_Type: person.employmentType,
      Income: person.earning,
      // Logic to combine Company/Business name into one column
      Organization_Name: person.companyName || person.businessName || "N/A",
      Sector: person.sector || "N/A"
    }));

    // 2. Create the worksheet
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

    // 3. Download the file
    XLSX.writeFile(workbook, "Loan_Enquiries_Data.xlsx");
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (loading) return <div className="text-center mt-20 text-xl">Loading Data...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          
          <div className="flex gap-3">
            {/* --- NEW: Export Button --- */}
            <button 
              onClick={handleExportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Export to Excel
            </button>

            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Requirement</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Income</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">PAN Card</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Company / Business</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">City</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {enquiries.map((person) => (
                  <tr key={person.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.createdAt?.seconds 
                        ? new Date(person.createdAt.seconds * 1000).toLocaleDateString() 
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {person.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{person.phone}</div>
                      <div className="text-xs text-gray-400">{person.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {person.loanType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₹{person.earning}
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase font-mono">
                      {person.panCard || "-"}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.companyName ? (
                        <span className="text-gray-700">{person.companyName} <span className="text-xs text-gray-400">(Co.)</span></span>
                      ) : person.businessName ? (
                         <span className="text-gray-700">{person.businessName} <span className="text-xs text-gray-400">(Biz)</span></span>
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.city}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}