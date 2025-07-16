import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ContactInfo />
      <Footer />
    </div>
  );
}
