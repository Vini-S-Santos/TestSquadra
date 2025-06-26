import { useEffect, useState } from "react";
import api from "../services/api";
import LeadCard from "../components/LeadCard";

const Home = () => {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await api.get("/");
    setLeads(res.data.filter((lead) => lead.status === "pending"));
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leads Pendentes</h1>
      {leads.length > 0 ? (
        leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} onUpdate={fetchLeads} />
        ))
      ) : (
        <p className="text-gray-500">Nenhum lead pendente.</p>
      )}
    </div>
  );
};

export default Home;
