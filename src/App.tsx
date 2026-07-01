/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Solutions from "./components/Solutions";
import FullStackApproach from "./components/FullStackApproach";
import PortfolioCarousel from "./components/PortfolioCarousel";
import WooShopCustom from "./components/WooShopCustom";
import FrontendDev from "./components/FrontendDev";
import BackendDatabase from "./components/BackendDatabase";
import IntegrationArch from "./components/IntegrationArch";
import SecurityCompliance from "./components/SecurityCompliance";
import WhatWeOfferGrid from "./components/WhatWeOfferGrid";
import QuoteBanner from "./components/QuoteBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import FinalCTA from "./components/FinalCTA";
import FAQAccordion from "./components/FAQAccordion";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-navy-100 selection:text-navy-950">
      {/* 1. Header Navigation */}
      <Header />
      
      {/* Main Sections */}
      <main className="pt-18.25"> {/* Offsets fixed header */}
        {/* 2. Hero Section */}
        <Hero />
        
        {/* 3. Pain Points Section */}
        <PainPoints />
        
        {/* 4. Solutions Section */}
        <Solutions />
        
        {/* 5. Full Stack Approach Section */}
        <FullStackApproach />
        
        {/* 6. Portfolio Carousel */}
        <PortfolioCarousel />
        
        {/* 7. WooCommerce, Shopify & Custom Builds */}
        <WooShopCustom />
        
        {/* 8. Frontend Development Section */}
        <FrontendDev />
        
        {/* 9. Backend & Database Section */}
        <BackendDatabase />
        
        {/* 10. Integration Architecture Section */}
        <IntegrationArch />
        
        {/* 11. Security and Compliance Section */}
        <SecurityCompliance />
        
        {/* 12. "What we offer" Grid */}
        <WhatWeOfferGrid />
        
        {/* 13. Quote Banner */}
        <QuoteBanner />
        
        {/* 14. "Why choose us" Section */}
        <WhyChooseUs />
        
        {/* 15. Final CTA Section */}
        <FinalCTA />
        
        {/* 16. FAQ Accordion */}
        <FAQAccordion />
        
        {/* 17. Contact Form Section */}
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
