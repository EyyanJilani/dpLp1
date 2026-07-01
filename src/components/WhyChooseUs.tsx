import { motion } from "motion/react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-black py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase font-mono">Our Edge</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Why choose us
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden bg-zinc-950 border border-red-900/30 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80"
                alt="Senior developer at a high-performance multi-monitor workstation building custom ecommerce systems"
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-red-900/90 backdrop-blur-sm border border-red-500/20 px-3 py-1 rounded-sm text-[10px] font-bold font-mono tracking-widest text-red-200 uppercase">
                Senior Engineers Only
              </div>
            </div>
            
            <h3 className="mt-6 text-xl font-bold text-white font-display">
              Ecommerce knowledge alongside technical skill
            </h3>
            
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Our team understands both how online retail actually runs day to day and how to build software properly. 
              That combination matters more than either skill on its own, and it's why clients come to us looking for 
              ecommerce development services rather than just a coding shop.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden bg-zinc-950 border border-red-900/30 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Agile collaborative meeting with team members reviewing commerce layout options on a laptop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-red-900/90 backdrop-blur-sm border border-red-500/20 px-3 py-1 rounded-sm text-[10px] font-bold font-mono tracking-widest text-red-200 uppercase">
                100% In-House Team
              </div>
            </div>
            
            <h3 className="mt-6 text-xl font-bold text-white font-display">
              End to end capability under one roof
            </h3>
            
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              We handle every layer of the platform ourselves, from database through to storefront, which removes 
              the coordination headaches that come from splitting frontend and backend work across separate teams. 
              One team, one vision, one point of accountability.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
