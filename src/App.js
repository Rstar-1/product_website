import { Route, Routes } from "react-router-dom";
import Error from "./website/error/Error";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/pages/home/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* ======================= Start-pages ======================= */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/connect" element={<Home />} />
        {/* ======================= End-pages ======================= */}

        {/* ======================= Start-Error ======================= */}
        <Route path="*" element={<Error />} />
        {/* ======================= End-Error ======================= */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
