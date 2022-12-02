import './App.css';
import "./assets/css/style.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blogs from './components/pages/Blogs';
import OurClients from './components/pages/OurClients';
import ServiceDetails from './components/pages/ServiceDetails';
import Services from './components/pages/Services';
import Float from './components/floatIcons/Float';


function App() {
  return (
    <>
      <Float />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/service/details" element={<ServiceDetails />} /> */}
          <Route path="/our/clients" element={<OurClients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
