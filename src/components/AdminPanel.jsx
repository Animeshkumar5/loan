import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, orderBy, query, deleteDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx"; 

export default function AdminPanel() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // --- NEW: States for Search and Filter ---
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLoanType, setFilterLoanType] = useState("");
  
  const navigate = useNavigate();

  // 1. Fetch Data
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

  // --- NEW: Delete Function ---
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry? This cannot be undone.")) {
      try {
        await deleteDoc(doc(db, "enquiries", id));
        // Update UI locally after delete
        setEnquiries(enquiries.filter((item) => item.id !== id));
        alert("Enquiry deleted successfully");
      } catch (error) {
        console.error("Error deleting document:", error);
        alert("Error deleting enquiry");
      }
    }
  };

  // 2. Export to Excel
  const handleExportToExcel = () => {
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
      Organization_Name: person.companyName || person.businessName || "N/A",
      Sector: person.sector || "N/A"
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
    XLSX.writeFile(workbook, "Loan_Enquiries_Data.xlsx");
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // --- NEW: Filter Logic ---
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch = 
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone?.includes(searchTerm) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterLoanType ? item.loanType === filterLoanType : true;

    return matchesSearch && matchesType;
  });

  if (loading) return <div className="text-center mt-20 text-xl font-semibold text-gray-500">Loading Data...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          
          <div className="flex gap-3">
            <button 
              onClick={handleExportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-sm font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Export Excel
            </button>

            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition shadow-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* --- NEW: Search & Filter Toolbar --- */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4">
            <input 
                type="text" 
                placeholder="Search by Name, Phone or Email..." 
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select 
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                value={filterLoanType}
                onChange={(e) => setFilterLoanType(e.target.value)}
            >
                <option value="">All Loan Types</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Used Car Loan">Used Car Loan</option>
            </select>
        </div>

        {/* Data Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Requirement</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Income</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Company / Biz</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">City</th>
                  <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEnquiries.length > 0 ? (
                    filteredEnquiries.map((person) => (
                    <tr key={person.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.createdAt?.seconds 
                            ? new Date(person.createdAt.seconds * 1000).toLocaleDateString() 
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {person.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="font-medium text-gray-900">{person.phone}</div>
                        <div className="text-xs text-gray-500">{person.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${person.loanType === 'Business Loan' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                            {person.loanType}
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{person.earning}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.companyName ? (
                            <span className="text-gray-700 font-medium">{person.companyName}</span>
                        ) : person.businessName ? (
                            <span className="text-gray-700 font-medium">{person.businessName}</span>
                        ) : (
                            "-"
                        )}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.city}
                        </td>

                        {/* --- NEW: Delete Button --- */}
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <button 
                                onClick={() => handleDelete(person.id)}
                                className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-full transition"
                                title="Delete Entry"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="8" className="px-6 py-10 text-center text-gray-500">
                            No enquiries found matching your search.
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}