import './App.css';
import "./assets/css/Style.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Blogs from './Components/Pages/Blogs';
import OurClients from './Components/Pages/OurClients';
import ServiceDetails from './Components/Pages/ServiceDetails';
import Services from './Components/Pages/Services';
import Float from './Components/floatIcons/Float';


function App() {
  return (
    <>
      <Float />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/details" element={<ServiceDetails />} />
          <Route path="/our/clients" element={<OurClients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
