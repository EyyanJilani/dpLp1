import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import sec2 from "../../assets/images/sec2.webp";

export default function IntegrationArch() {
  return (
    <section id="integrations" className="bg-black py-20 lg:py-28 border-b border-red-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12 lg:items-center">

          {/* Left: Large image with subtle overlay and vertical accent */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-md overflow-hidden border border-red-900/30 shadow-2xl bg-zinc-950 aspect-[16/10]">
              <img
                src={sec2}
                alt="Integrated ecommerce architecture diagram on a dark dashboard"
                className="w-full h-full object-cover brightness-90 contrast-[105%]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />

              <div className="absolute left-0 top-0 h-full w-2 bg-red-900/50" />
              <div className="absolute bottom-4 left-6 text-sm text-zinc-100/80 bg-black/40 px-3 py-1 rounded">
                API & ERP integrations — engineered
              </div>
            </div>
          </motion.div>

          {/* Right: Text, bullets and CTA */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="text-xs font-semibold tracking-widest text-red-400 uppercase font-mono">ERP & API Architecture</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                Integrations that connect your whole operation
              </h2>

              <p className="mt-5 text-base text-zinc-400 leading-relaxed max-w-xl">
                We build resilient API layers and integrations so your storefront, accounting,
                shipping and marketing tools work together as one fast, reliable system —
                without fragile plugins or vendor lock-in.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Reliable sync with Xero, MYOB and inventory systems",
                  "Secure, auditable data flows and webhooks",
                  "Extendable APIs for mobile apps and new sales channels",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-zinc-200">
                    <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-zinc-300">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-md shadow-sm transform-gpu transition-all duration-200 hover:-translate-y-0.5"
                >
                  Talk integrations
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
