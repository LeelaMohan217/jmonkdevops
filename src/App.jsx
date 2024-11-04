import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbar from "./pages/Navbar";

import Footer from "./components/Footer";
import ContactCmp from "./components/ContactCmp";
import Home from "./pages/Home";
import About from "./pages/About";
import Student from "./pages/Student";
import Businessman from "./pages/Businessman";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import the button
import { Routes, Route } from "react-router-dom";
import Loan from "./pages/Loan";
import Dashboard from "./pages/Dashboard";
import TransactionHistory from "./pages/TransactionHistory";
import PaymentDetails from "./pages/PaymentDetails";
import Primefaces from "./pages/Primefaces";
function Layout() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/businessman" element={<Businessman />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/contact" && <ContactCmp />}
      <Footer /> */}
      {/* <ScrollToTopButton />  */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/loan-amount-tracker" element={<Loan />} />
        <Route path="/primefaces" element={<Primefaces />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
