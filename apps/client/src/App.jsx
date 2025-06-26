import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Accepted from "./pages/Accepted";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="w-full min-h-screen max-h-screen flex flex-col">
        <div className="flex border-b border-gray-300 bg-white rounded-t-md shadow-sm">
          <Link
            to="/"
            className={`flex-1 text-center py-3 font-medium border-b-2 ${
              location.pathname === "/" ? "border-orange-500 text-black" : "border-transparent text-gray-500"
            }`}
          >
            Invited
          </Link>
          <Link
            to="/accepted"
            className={`flex-1 text-center py-3 font-medium border-b-2 ${
              location.pathname === "/accepted" ? "border-orange-500 text-black" : "border-transparent text-gray-500"
            }`}
          >
            Accepted
          </Link>
        </div>
        <div className="bg-gray-100 flex-1 max-h-[calc(100vh-52px)] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accepted" element={<Accepted />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
