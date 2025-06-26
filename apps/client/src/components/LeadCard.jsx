import api from "../services/api";

const LeadCard = ({ lead, onUpdate }) => {
  const handleAccept = async () => {
    await api.post(`/${lead.id}/accept`);
    onUpdate();
  };

  const handleDecline = async () => {
    await api.post(`/${lead.id}/decline`);
    onUpdate();
  };

  return (
    <div className="border p-4 rounded shadow mb-4 bg-white">
      <h2 className="text-xl font-bold">{lead.firstName}</h2>
      <p><strong>Suburb:</strong> {lead.suburb}</p>
      <p><strong>Category:</strong> {lead.category}</p>
      <p><strong>Description:</strong> {lead.description}</p>
      <p><strong>Price:</strong> ${lead.price}</p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-green-600 text-white px-4 py-1 rounded"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-600 text-white px-4 py-1 rounded"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default LeadCard;
