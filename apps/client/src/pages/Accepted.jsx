import { useEffect, useState } from "react";
import api from "../services/api";
import { FaMapMarkerAlt, FaToolbox } from "react-icons/fa";

const Accepted = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchAccepted = async () => {
      const res = await api.get("/accepted");
      setLeads(res.data);
    };

    fetchAccepted();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Leads Aceitos</h1>
      {leads.length > 0 ? (
        leads.map((lead) => (
          <div
            key={lead.id}
            className="flex bg-white border rounded-lg shadow mb-4"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 text-orange-500 text-3xl m-4">
              {lead.fullName?.[0] || "?"}
            </div>
            <div className="flex-1 p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-base">{lead.fullName}</span>
                {lead.acceptedAt && (
                  <span className="text-gray-400 text-xs">
                    {new Date(lead.acceptedAt).toLocaleString("pt-BR")}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm mb-2 text-gray-600">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400" />
                  {lead.suburb}
                </span>
                <span className="flex items-center gap-1">
                  <FaToolbox className="text-gray-400" />
                  {lead.category}
                </span>
                <span>
                  Job ID: <span className="font-semibold">{lead.jobId}</span>
                </span>
                <span className="font-semibold text-orange-500">
                  ${lead.price?.toFixed(2)} Lead Invitation
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                <span className="text-orange-500">{lead.phone}</span>
                <span className="text-orange-500">{lead.email}</span>
              </div>
              <div className="text-gray-700 text-sm">
                {lead.description}
              </div>
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
