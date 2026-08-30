import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import OurCompany from "./Pages/OurCompany";
import Services from "./Pages/Services";
import Leadership from './Pages/Leadership';
import VisionMission from './Pages/VisionMission';
import ContactMessages from "./Pages/ContactMessages";
import TelecomServices from "./Pages/TelecomServices";
import SolarSolution from "./Pages/SolarSolution";
import SafetyProducts from "./Pages/SafetyProducts";
import Blogs from "./Pages/blogs/Blogs";
import BlogDetails from "./Pages/blogs/BlogDetails";
import AddBlog from "./Pages/blogs/AddBlog";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Careers from "./Pages/Careers";
import ManpowerServices from "./Pages/ManpowerServices";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
            <Route path="/add_blog" element={<AddBlog />} />
            <Route path="/our_company" element={<OurCompany />} />
            <Route path="/services" element={<Services />} />
            <Route path="/telecom-services" element={<TelecomServices />} />
            <Route path="/solar-solutions" element={<SolarSolution />} />
            <Route path="/safety-products" element={<SafetyProducts />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/vision_mission" element={<VisionMission />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/terms_conditions" element={<TermsConditions />} />
            <Route path="/contact_messages" element={<ContactMessages />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/manpower_services" element={<ManpowerServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
