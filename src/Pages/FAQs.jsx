import React, { useEffect } from "react";
import Header from "../components/Header";
import FAQs from "../components/FAQs";
import Footer from "../components/TheFooter";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <FAQs />
      <Footer />
    </div>
  );
};

export default FAQ;
