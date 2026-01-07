import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoCanBenefit from "./components/WhoCanBenefit";
import KeyBenefits from "./components/KeyBenefits";
import HowItWorks from "./components/HowItWorks";
import Calculator from "./components/Calculator";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Dashboard from "./components/Dashboard";

/* 🔹 Home page as a layout */
function Home() {
  return (
    <>
      <Hero />
      <WhoCanBenefit />
      <KeyBenefits />
      <HowItWorks />
      <Calculator />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* optional future pages */}
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}
