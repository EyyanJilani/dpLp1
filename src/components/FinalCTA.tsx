import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28 border-b border-red-900/30">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-red-900/20 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-red-600/10 blur-3xl opacity-50" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase font-mono">Let's Build</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display leading-tight">
            Ready to build a platform that actually fits your business?
          </h2>
          
          <p className="mt-6 text-base text-zinc-400 leading-relaxed">
            If you've been searching for an <strong className="text-white">ecommerce developer near me</strong> and finding mostly generic agencies offering the same templated approach, we'd like the chance to show you something different. Our team has helped Australian businesses move away from platforms that were holding them back and into custom builds designed specifically for how they operate.
          </p>
          
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-sm bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition-all duration-200"
            >
              Schedule Your Free Consultation
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
