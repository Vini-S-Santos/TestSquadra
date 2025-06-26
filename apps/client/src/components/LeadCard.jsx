import api from "../services/api";
import { FaMapMarkerAlt, FaToolbox } from "react-icons/fa";

const LeadCard = ({ lead, onUpdate }) => {

const handleAccept = async () => {
  try {
    await api.post(`/${lead.id}/accept`);
    onUpdate();
  } catch (error) {
    console.error("Error:", error);
  }
};

const handleDecline = async () => {
  try {
    await api.post(`/${lead.id}/decline`);
    onUpdate();
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className="bg-white border border-gray-200 rounded mb-4 overflow-hidden">
      <div className="flex items-center px-4 py-3">
        <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold text-lg">
          {lead.firstName.charAt(0)}
        </div>
        <div className="ml-3">
          <div className="font-semibold text-sm">{lead.firstName}</div>
          <div className="text-xs text-gray-500">
            {new Date(lead.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}{" "}
            @{" "}
            {new Date(lead.createdAt).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200" />

      <div className="text-sm text-gray-700 flex flex-wrap items-center gap-x-4 px-4 py-3">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-gray-400" />
          {lead.suburb}
        </div>
        <div className="flex items-center gap-1">
          <FaToolbox className="text-gray-400" />
          {lead.category}
        </div>
        <div>Job ID: {lead.id}</div>
      </div>


      <div className="border-t border-gray-200" />

      <p className="text-sm text-gray-600 px-4 py-3">{lead.description}</p>

      <div className="border-t border-gray-200" />

      <div className="flex items-center gap-4 px-4 py-3">
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded text-sm font-medium"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-1 rounded text-sm font-medium"
          >
            Decline
          </button>
        </div>
        <div className="text-sm font-semibold text-gray-800">
          ${lead.price.toFixed(2)}{" "}
          <span className="text-gray-500 font-normal">Lead Invitation</span>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
