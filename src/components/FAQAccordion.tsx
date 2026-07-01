import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase font-mono">FAQ</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-zinc-700">
            Got questions about custom ecommerce development? We have answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="border border-red-900/30 rounded-sm overflow-hidden bg-zinc-950/80 hover:bg-zinc-950 transition-colors duration-200"
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-white focus:outline-none focus:ring-1 focus:ring-red-500/20"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-400" : ""
                    }`} 
                  />
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-red-900/30 bg-zinc-950">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
