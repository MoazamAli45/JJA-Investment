import Navbar from "./layout/Navbar";
import Contact from "./components/Home/Contact";
import Discover from "./components/Home/Discover";
import Features from "./components/Home/Features";
import Hero from "./components/Home/Hero";
import Offerings from "./components/Home/Offerings";
import Services from "./components/Home/Services";
import Testimonial from "./components/Home/Testimonial";
import Footer from "./layout/Footer";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Services />
      <Offerings />
      <Discover />
      <Features />
      <Testimonial />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
