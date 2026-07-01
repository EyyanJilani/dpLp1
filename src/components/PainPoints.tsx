import { motion } from "motion/react";
import { XCircle } from "lucide-react";
import sec2 from "../../assets/images/sec2.webp";
import { painPoints } from "../data";

export default function PainPoints() {
  return (
    <section id="pain-points" className="bg-black py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-red-900/30 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-black opacity-80" />
            <img
              src={sec2}
              alt="Ecommerce dashboard and platform analytics on a dark screen"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                Where standard platforms start to fall short
              </h2>
              <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-xl">
                Most Australian businesses don't realise how much a generic platform is costing them until they try to do something it wasn't built for.
              </p>
            </motion.div>

            <div className="mt-12 space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-sm bg-zinc-950 border border-red-900/30 shadow-sm"
                >
                  <div className="mt-0.5">
                    <XCircle className="h-5 w-5 text-red-500/80" />
                  </div>
                  <p className="text-base font-medium text-zinc-200 leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
