import { motion } from "motion/react";
import { ShieldAlert } from "lucide-react";

export default function SecurityCompliance() {
  return (
    <section id="security-compliance" className="bg-black py-20 lg:py-24 border-b border-red-900/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-sm border border-red-900/30 bg-zinc-950 p-8 md:p-12 shadow-sm relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-red-900 rounded-full blur-3xl -z-10 opacity-30" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-red-900/20 border border-red-900 text-red-300">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Security and compliance built in from day one
            </h2>
          </div>

          <div className="space-y-6 text-base text-zinc-400 leading-relaxed">
            <p>
              Australian consumers expect their data and payment details to be handled properly, and that expectation 
              only keeps growing. We build authentication, encryption, and access controls into the platform from the 
              start rather than adding them as an afterthought, with PCI compliance for payment processing and privacy 
              practices aligned with the Australian Privacy Principles.
            </p>
            <p>
              Every build goes through structured testing across functionality, security, and usability before it goes 
              live, with automated testing in place so future updates don't quietly break something that used to work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
