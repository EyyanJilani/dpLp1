import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import sec3 from "../../assets/images/sec3.webp";
import { solutions } from "../data";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-black py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 lg:items-center">
          
          {/* Left Column - Bullet List */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                What custom ecommerce development actually gives you
              </h2>
              <p className="mt-4 text-base text-zinc-400 max-w-2xl">
                A custom platform turns your website from a simple store brochure into a fully unified, speed-optimized system that empowers your brand.
              </p>
            </motion.div>

            <div className="mt-10 space-y-4">
              {solutions.map((sol, index) => (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-sm bg-zinc-950 border border-red-900/30"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-base font-semibold text-zinc-100 leading-relaxed">
                    {sol.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Beautiful Support Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-red-900/40 bg-zinc-950 aspect-[4/3] w-full">
              <img
                src={sec3}
                alt="Laptop and phone showcasing responsive screens of an online ecommerce store product details page"
                className="w-full h-full object-cover grayscale-[10%] contrast-[102%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
