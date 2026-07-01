import { motion } from "motion/react";

export default function BackendDatabase() {
  const blocks = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      text: "A storefront is only as good as what's powering it behind the scenes. Database structure determines how quickly pages load under pressure, how flexible your catalogue can be, and how well the platform scales as order volume grows."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      text: "We design schemas for product relationships, variants, pricing tiers, and inventory locations with both today's needs and tomorrow's growth in mind."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      text: "We also build the admin tools your team actually uses, from order processing to reporting, so daily operations get easier rather than staying stuck with a generic dashboard that wasn't built for your business."
    }
  ];

  return (
    <section id="backend-db" className="bg-black py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase font-mono">Infrastructure & Scalability</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Backend systems that hold up under real volume
          </h2>
        </div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-16">
          {blocks.map((block, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-zinc-950 p-6 rounded-sm border border-red-900/30 shadow-sm ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Block Image */}
                <div className={`md:col-span-4 ${isEven ? "md:order-last" : ""}`}>
                  <div className="relative aspect-[16/10] sm:aspect-video md:aspect-square rounded-sm overflow-hidden bg-zinc-900 border border-red-900/30">
                    <img
                      src={block.image}
                      alt={`Backend systems supporting scalable operations and database schemas`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Block Text */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <p className="text-base text-zinc-200 leading-relaxed font-medium">
                    {block.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-all duration-200"
          >
            See Our Process
          </a>
        </div>

      </div>
    </section>
  );
}
