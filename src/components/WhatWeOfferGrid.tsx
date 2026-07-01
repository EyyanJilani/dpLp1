import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { offerings } from "../data";

export default function WhatWeOfferGrid() {
  // Extending offerings dynamically to achieve a clean 12-card grid
  const extendedOfferings = [
    ...offerings,
    {
      id: 11,
      title: "Headless Commerce Migration",
      description: "Migrating aging platforms to ultra-fast headless architectures while preserving existing business workflows and integrations.",
      iconName: "Zap"
    },
    {
      id: 12,
      title: "Conversion Rate Optimization",
      description: "Continuously monitoring storefront interactions to refine checkouts, menus, and landing pages for peak sales performance.",
      iconName: "TrendingUp"
    }
  ];

  return (
    <section id="offerings" className="bg-black py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase font-mono">Expertise Blueprint</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            What we offer
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            A comprehensive suite of ecommerce engineering and strategy services tailored for Australian growth.
          </p>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {extendedOfferings.map((item, index) => {
            // Get the matching Lucide icon dynamically from the name
            const IconComponent = (Icons as any)[item.iconName] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col p-6 rounded-sm border border-red-900/30 bg-zinc-950 shadow-sm hover:bg-zinc-900 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-red-900/20 text-red-300 border border-red-900 mb-5">
                  <IconComponent className="h-5 w-5 text-red-400" />
                </div>
                
                <h3 className="text-base font-bold text-white font-display">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
