import { motion } from "motion/react";

export default function FrontendDev() {
  return (
    <section id="frontend-dev" className="bg-black py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 lg:items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold tracking-widest text-red-400 uppercase font-mono">User Experience & Speed</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                Frontend built for conversion, not just appearance
              </h2>
              
              <div className="mt-6 space-y-6 text-base text-zinc-400 leading-relaxed">
                <p>
                  Your storefront is the first impression most customers get of your brand, and a templated 
                  theme rarely does it justice. As your ecommerce designer and developer, we build storefronts 
                  that reflect your brand properly while keeping conversion front of mind in every layout decision.
                </p>
                <p>
                  Speed matters as much as visuals. We build with lazy loading, code splitting, and mobile 
                  performance in mind from the very first wireframe, because a slow site loses Australian 
                  shoppers just as quickly as anywhere else, particularly on mobile data outside the major cities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Two Stacked Images */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-6 items-center">
            
            {/* Image 1: Wireframes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full sm:w-1/2 aspect-[4/5] rounded-sm overflow-hidden border border-red-900/30 shadow-lg bg-zinc-950"
            >
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
                alt="UX wireframe templates, sketches, and detailed sitemaps reviewed on paper by an ecommerce designer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Image 2: Responsive Laptop/Phone */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full sm:w-1/2 aspect-[4/5] rounded-sm overflow-hidden border border-red-900/30 shadow-lg bg-zinc-950 sm:translate-y-8"
            >
              <img
                src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80"
                alt="A laptop showing responsive design layout previews next to a mobile phone testing storefront load speeds"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
