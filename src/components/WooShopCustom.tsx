import { motion } from "motion/react";

export default function WooShopCustom() {
  return (
    <section id="woo-shopify-custom" className="bg-black py-20 lg:py-24 border-b border-red-900/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display text-center">
            WooCommerce, Shopify, and fully custom builds
          </h2>
          
          <div className="mt-8 space-y-6 text-base text-zinc-400 leading-relaxed text-left">
            <p>
              Not every business needs a fully bespoke platform from scratch, and we'll tell you honestly 
              when a flexible existing platform makes more sense. As an experienced WooCommerce developer team, 
              we build and extend WordPress based stores for Australian brands who want the flexibility of 
              open source with custom functionality layered on top, from subscription models to complex shipping rules.
            </p>
            <p>
              For businesses wanting to create a dropshipping store, we build lean, fast loading platforms 
              designed around supplier integrations, automated order routing, and inventory syncing, so you're not 
              stuck managing stock manually as you scale. And where neither WooCommerce nor a hosted platform can 
              do what you need, we build fully custom from the ground up.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
