import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function QuoteBanner() {
  return (
    <section className="bg-black py-24 relative overflow-hidden border-b border-red-900">
      {/* Decorative vector shape background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black to-black opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-red-900/10 rounded-full blur-3xl -z-10" />
      
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Quote className="h-10 w-10 text-red-500/80 mb-8 rotate-180" />
          
          <blockquote className="text-xl sm:text-2xl font-semibold font-display text-white leading-relaxed max-w-4xl italic">
            "Working with a specialised custom ecommerce development team means partnering with developers 
            who understand both day to day retail operations and modern web development. We bridge the gap 
            between business requirements and working software, and every platform we build is designed 
            for long term growth, not just a launch date."
          </blockquote>
          
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-8 bg-red-500/50" />
            <span className="text-xs font-bold font-mono tracking-widest text-red-500 uppercase">
              The Engineering Creed
            </span>
            <div className="h-px w-8 bg-red-500/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
