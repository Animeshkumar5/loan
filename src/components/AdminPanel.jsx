import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to fetch data from Firestore
  const fetchEnquiries = async () => {
    try {
      // Get reference to 'enquiries' collection and order by newest first
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
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
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
                      {person.earning}
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