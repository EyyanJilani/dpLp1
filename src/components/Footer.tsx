import { Globe, Shield, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-red-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-red-900/10 rounded-full blur-3xl -z-10 opacity-40" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-red-900">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-red-600 text-white border-b-2 border-red-500">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-display tracking-tight text-white leading-none">
                  ECOMDEV
                </span>
                <span className="text-[10px] font-bold font-mono tracking-widest text-red-400 uppercase mt-0.5 leading-none">
                  AUSTRALIA
                </span>
              </div>
            </div>
            
            <p className="text-sm text-zinc-300 leading-relaxed max-w-sm">
              We engineer custom, speed-optimized, and conversion-focused ecommerce architectures. Designed around your business workflows to scale your sales without technical boundaries.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-red-900/10 p-3 rounded border border-red-900 w-fit">
              <Shield className="h-4 w-4 text-red-500" />
              PCI Compliant | APPs Privacy Aligned
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-widest text-white uppercase">Expertise</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#solutions" className="hover:text-white transition-colors">Custom Storefronts</a></li>
              <li><a href="#woo-shopify-custom" className="hover:text-white transition-colors">WooCommerce & Shopify</a></li>
              <li><a href="#backend-db" className="hover:text-white transition-colors">Database Schemas & APIs</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">ERP & Freight Sync</a></li>
              <li><a href="#security-compliance" className="hover:text-white transition-colors">Secure Checkout</a></li>
            </ul>
          </div>

          {/* Regional Hubs */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-widest text-white uppercase flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-red-500" />
              Australian Coverage
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Serving retail and B2B brands in major hubs and regional locations across Australia.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="bg-red-900 px-2 py-1 rounded text-zinc-400">Sydney</span>
              <span className="bg-red-900 px-2 py-1 rounded text-zinc-400">Melbourne</span>
              <span className="bg-red-900 px-2 py-1 rounded text-zinc-400">Brisbane</span>
              <span className="bg-red-900 px-2 py-1 rounded text-zinc-400">Adelaide</span>
              <span className="bg-red-900 px-2 py-1 rounded text-zinc-400">Perth</span>
              <span className="bg-red-900 px-2 py-1 rounded text-zinc-400">Hobart</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} EcomDev Australia. All rights reserved. ABM Registered.</p>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
