import { useEffect, useState } from "react";
import api from "../services/api";
import LeadCard from "../components/LeadCard";

const Home = () => {
  const [leads, setLeads] = useState([]);

const fetchLeads = async () => {
  try {
    const res = await api.get("/");
    setLeads(res.data.filter((lead) => lead.status === "pending"));
  } catch (error) {
    console.error("Error:", error);
    setLeads([]); 
  }
};

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="px-4 py-4">
      {leads.length > 0 ? (
        leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} onUpdate={fetchLeads} />
        ))
      ) : (
        <p className="text-gray-500 text-center py-4">No pending leads.</p>
      )}
    </div>
  );
};

export default Home;
