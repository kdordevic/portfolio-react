import React from "react";
import Contact from "./Contact.js";
import About from "./About.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import Home from "./Home.js";
import Services from "./Services.js";
import Works from "./Works.js";
import Graphic from "./Graphic.js";
import Websites from "./Websites.js";
import Art from "./Art.js";
import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.js";
// import { useTranslation, Trans } from "react-i18next";


function App() {
  //  const { t } = useTranslation();
  return (
    <div>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route path="/works/graphic" element={<Graphic />}></Route>
            <Route path="/works/websites" element={<Websites />}></Route>
            <Route path="/works/art" element={<Art />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/privacy" element={<PrivacyPolicy />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;