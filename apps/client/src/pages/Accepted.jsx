import { useEffect, useState } from "react";
import api from "../services/api";
import { FaMapMarkerAlt, FaToolbox, FaPhone, FaEnvelope } from "react-icons/fa";

function formatDate(dateString) {
  try {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return "";

    const datePart = date.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
    const timePart = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).toLowerCase();
    return `${datePart.replace(",", "")} @ ${timePart}`;
  } catch (error) {
    console.error("Error:", error);
    return "";
  }
}

const Accepted = () => {
  const [leads, setLeads] = useState([]);

useEffect(() => {
  const fetchAccepted = async () => {
    try {
      const res = await api.get("/accepted");
      setLeads(res.data);
    } catch (error) {
      console.error("Error:", error);
      setLeads([]); 
    }
  };
  fetchAccepted();
}, []);

  return (
    <div className="p-4">
      {leads.length > 0 ? (
        leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white border-gray-300 rounded shadow mb-4"
          >
            <div className="flex items-center px-4 pt-4 pb-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-orange-500 text-2xl mr-4">
                {lead.fullName?.[0] || "?"}
              </div>
              <div>
                <div className="font-bold text-base">{lead.fullName}</div>
                {lead.createdAt && (
                  <div className="text-xs text-gray-400">
                    {formatDate(lead.createdAt)}
                  </div>
                )}
              </div>
            </div>
            <hr className="border-t border-gray-200 mx-4 my-1" />
            <div className="flex flex-wrap items-center gap-x-4 px-4 text-sm text-gray-700 mb-2">
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-gray-400" /> {lead.suburb}
              </div>
              <div className="flex items-center gap-1">
                <FaToolbox className="text-gray-400" /> {lead.category}
              </div>
              <div>
                Job ID: <span className="font-semibold">{lead.id}</span>
              </div>
              <div className="font-semibold text-gray-400">
                ${lead.price?.toFixed(2)} Lead Invitation
              </div>
            </div>
            <hr className="border-t border-gray-200 mx-4 my-1" />
            <div className="flex flex-wrap items-center gap-6 px-4 py-2">
              <span className="flex items-center gap-1 text-orange-500">
                <FaPhone className="text-gray-400" /> {lead.phone}
              </span>
              <span className="flex items-center gap-1 text-orange-500">
                <FaEnvelope className="text-gray-400" /> {lead.email}
              </span>
            </div>
            <div className="px-4 pb-3 text-sm text-gray-500">
              {lead.description}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Nenhum lead aceito ainda.</p>
      )}
    </div>
  );
};

export default Accepted;
