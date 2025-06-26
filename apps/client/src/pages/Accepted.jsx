import { useEffect, useState } from "react";
import api from "../services/api";

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
      <h1 className="text-2xl font-bold mb-4">Leads Aceitos</h1>
      {leads.length > 0 ? (
        leads.map((lead) => (
          <div
            key={lead.id}
            className="border p-4 rounded shadow mb-4 bg-white"
          >
            <h2 className="text-xl font-bold">{lead.fullName}</h2>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Phone:</strong> {lead.phone}</p>
            <p><strong>Suburb:</strong> {lead.suburb}</p>
            <p><strong>Category:</strong> {lead.category}</p>
            <p><strong>Description:</strong> {lead.description}</p>
            <p><strong>Final Price:</strong> ${lead.price}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Nenhum lead aceito ainda.</p>
      )}
    </div>
  );
};

export default Accepted;
