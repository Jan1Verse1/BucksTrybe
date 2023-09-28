import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import BTWorks from "../components/BTWork";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Join from "../components/Join";
import FAQNews from "../components/FAQNews";
import Footer from "../components/TheFooter";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Offerings />
      <BTWorks />
      <Features />
      <Testimonials />
      <Join />
      <FAQNews />
      <Footer />
    </div>
  );
};

export default Home;
