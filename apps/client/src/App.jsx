import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Accepted from "./pages/Accepted";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">Leads</Link>
        <Link to="/accepted" className="hover:underline">Accepted</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accepted" element={<Accepted />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
