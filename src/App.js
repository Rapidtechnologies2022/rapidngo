import './App.css';
import "./assets/css/Style.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Blogs from './Components/Pages/Blogs';
// import OurClients from './Components/Pages/OurClients';
import ServiceDetails from './Components/Pages/ServiceDetails';
import Services from './Components/Pages/Services';
import Float from './Components/floatIcons/Float';
import Volunteers from './Components/Pages/Volunteers';
import Images from './Components/Pages/Images';
import Privacy from './Components/Pages/privacy';
import Terms from './Components/Pages/Terms';
import Videos from './Components/Pages/Videos';
import Donate from './Components/Pages/Donate';
import SuccessPage from './Components/Pages/SuccessPage';
import ScrollToTop from './Components/Pages/ScrollToTop';
import Admin from './Components/Pages/Admin';


function App() {
  return (
    <>
      <Float />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/details" element={<ServiceDetails />} />
            <Route path="/volunteer" element={<Volunteers />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='Terms' element={<Terms />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/admin/ngo" element={<Admin />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
