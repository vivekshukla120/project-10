import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";

// Pages
import Home from "./Pages/Home";
import Markets from "./Pages/Markets";
import Trade from "./Pages/Trade";
import Futures from "./Pages/Futures";
import Earn from "./Pages/Earn";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-kc-bg text-kc-text flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/futures" element={<Futures />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
