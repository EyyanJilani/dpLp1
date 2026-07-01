import { motion } from "motion/react";

export default function FullStackApproach() {
  return (
    <section id="full-stack-approach" className="bg-black py-20 lg:py-24 border-b border-red-900/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display text-center">
            A genuine full stack approach
          </h2>
          
          <div className="mt-8 space-y-6 text-base text-zinc-400 leading-relaxed text-left">
            <p>
              Building a platform that holds up over time means thinking about the whole stack at once, 
              not just the parts customers see. Our team works across the entire build, from database 
              structure through to the storefront a shopper interacts with, so backend decisions and 
              frontend experience are designed together rather than bolted on afterwards.
            </p>
            <p>
              Every project starts with discovery. We look at how your business actually operates today, 
              what's slowing you down, and where you want to be in two or three years, before any development 
              work begins. That discovery shapes the technical brief, the platform choice, and the roadmap 
              we build toward. It's the same rigour we'd want if it were our own store on the line.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
