import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-black py-20 lg:py-32 border-b border-red-900/30">
      {/* Abstract top background mesh */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-red-900/30 to-red-500/10 opacity-70 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 lg:items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-red-900/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-red-300 uppercase font-mono border border-red-900">
              Custom Ecommerce Development
            </div>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-display leading-[1.1]">
              Custom Ecommerce Development for Australian Businesses
            </h1>
            
            <p className="mt-6 text-xl font-medium text-zinc-300 leading-relaxed max-w-2xl">
              A platform built around how your business actually works, not the other way around
            </p>
            
            <div className="mt-8 space-y-6 text-base text-zinc-400 leading-relaxed max-w-2xl">
              <p>
                Generic templates and off the shelf platforms ask your business to bend around their limitations. 
                A pre built theme might get a store online quickly, but it rarely matches the way you actually sell, 
                manage stock, or serve customers across Australia. We specialise in ecommerce website development that 
                starts with your operations and builds outward from there, so the platform fits your workflows 
                instead of forcing you to work around someone else's.
              </p>
              <p>
                As an Australian focused ecommerce developer team, we've worked with retailers, wholesalers, and 
                direct to consumer brands who needed more than a standard build could offer. Whether you're after a 
                brand new online store creation project, a migration from an ageing platform, or a custom build with 
                features no plugin can provide, we put a senior developer on every project to keep quality consistent 
                from the first line of code to launch day.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-sm bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-all duration-200"
              >
                Book a Free Consultation
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
              <a
                href="#offerings"
                className="inline-flex items-center justify-center rounded-sm border border-red-700 bg-black px-6 py-3.5 text-sm font-semibold text-red-200 hover:bg-red-950 transition-all duration-200"
              >
                Our Services
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Styled Overlapping Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[450px] aspect-[4/5] lg:aspect-[3/4]">
              
              {/* Back / Main Image with Colorful Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-red-900/20 rounded-md -rotate-1 translate-x-2 translate-y-2 scale-[1.01] blur-md" />
              <div className="relative w-full h-full rounded-sm overflow-hidden border border-red-900/50 shadow-xl bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                  alt="Senior software engineer working on high-performance ecommerce platform code with glowing colorful displays"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Front Overlapping Image (Bottom Left) */}
              <motion.div 
                initial={{ x: -20, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-8 w-[60%] aspect-square rounded-sm overflow-hidden border-4 border-red-600 shadow-2xl bg-zinc-950"
              >
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80"
                  alt="Focused designer analyzing custom checkout conversion flows on developer monitor screen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
