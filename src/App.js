import { Route, Routes } from "react-router-dom";
import Error from "./website/error/Error";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/pages/home/Home";
import Ideas from "./website/pages/builder/Ideas";
import Builder from "./website/pages/builder/Builder";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* ======================= Start-pages ======================= */}
        <Route path="/" element={<Builder />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Home />} />
        <Route path="/page2" element={<Home />} />
        <Route path="/page3" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
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
