import React from "react";

import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Hero2 from "./pages/Hero2";
import ContactForm from "./components/ContactForm";
import Team from "./components/Team";
import ClientLogos from "./components/ClientLogos";
import FeatureSection16 from "./components/Features";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Hero2/>
    <Team/>
    <ClientLogos/>
    <FeatureSection16/>
    <Timeline/>
    <ContactForm/>
    <Footer/>
    
    </>
  );
}
