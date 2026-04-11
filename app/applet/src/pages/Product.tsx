import { Link } from 'react-router-dom';
import { ChevronRight, CalendarOff, ShoppingCart, Bell, Leaf, BadgeCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Product() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <nav className="mb-12 flex items-center gap-2 text-on-surface-variant text-sm font-label">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/shop" className="hover:text-primary transition-colors">Fruits</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface font-medium">Mango</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-7 relative">
          <div className="relative z-10 bg-surface-container-lowest rounded-[2rem] overflow-hidden editorial-shadow p-4 aspect-[4/5] md:aspect-square flex items-center justify-center">
            <img alt="Fresh organic mango" className="w-full h-full object-cover rounded-[1.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0o7szFUw-EFUcZ4dtTC72pncRodTEjB5jIfh9fBD-lTtgT59nI4TOTCT86NCRV4P94bCRMYtf2NHujt4EyZDDscx0CcIP5Txu3rJ48rRR0PJDvxpp5HoIP6RbtvKSo49O7ivgsPxBpfeV5n6CzySkuLpqdi8k6vrulKBGTbJSV759rasHAcYVtGJIOh3sSvMbqsDeNi1J6qvYTtyiKsf4u_hbQsxhaHCFpN3EplY-9z46If-XUISYu9hMihy9fIdUNXBK65QxBpM"/>
            <div className="absolute top-8 left-8 z-20">
              <div className="bg-error-container text-on-error-container px-6 py-2 rounded-full font-headline font-bold text-sm tracking-wide flex items-center gap-2 editorial-shadow">
                <CalendarOff className="w-5 h-5" />
                ❌ Out of Season
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary-container/10 rounded-full blur-2xl -z-10"></div>
        </div>

        <div className="lg:col-span-5 flex flex-col pt-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-background tracking-tighter mb-4 leading-none">
              Mango
            </h1>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-bold text-secondary">₹120</span>
              <span className="text-on-surface-variant font-label">/ kg</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h3 className="text-sm font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-3">The Profile</h3>
              <p className="text-lg text-on-surface leading-relaxed font-body">
                Sweet and juicy seasonal mangoes. Hand-picked from the sundrenched orchards of Mangaluru, these mangoes represent the pinnacle of tropical flavor.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest border-b-2 border-primary/10 rounded-2xl p-4 flex flex-col gap-1">
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-tighter">Origin</span>
                <span className="text-primary font-semibold">Local Farm</span>
              </div>
              <div className="bg-surface-container-lowest border-b-2 border-primary/10 rounded-2xl p-4 flex flex-col gap-1">
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-tighter">Vitamin</span>
                <span className="text-primary font-semibold">Rich in A & C</span>
              </div>
            </div>

            <div className="pt-8 flex flex-col gap-4">
              <button className="w-full py-5 rounded-xl bg-surface-variant text-on-surface-variant font-headline font-bold flex items-center justify-center gap-3 cursor-not-allowed opacity-60" disabled>
                <ShoppingCart className="w-5 h-5" />
                Currently Unavailable
              </button>
              <button className="w-full py-4 rounded-xl outline outline-1 outline-outline-variant/30 text-primary font-headline font-bold hover:bg-primary-container/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Bell className="w-5 h-5" />
                Notify When Back in Season
              </button>
            </div>

            <div className="pt-8 border-t border-outline-variant/10 flex items-center gap-8">
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <Leaf className="text-primary-dim w-5 h-5" />
                100% Organic
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <BadgeCheck className="text-primary-dim w-5 h-5" />
                Farm Direct
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-headline font-bold text-on-background tracking-tight mb-6">Waiting for the Harvest</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-body">
              Nature doesn't rush. Our mangoes are only harvested when they achieve peak sun-ripeness. While these are currently resting in the winter season, their flavor profile is being curated by the rich soil and coastal breeze of Mangaluru.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 text-primary font-bold group">
              Learn about our growing process
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-surface-container rounded-[3rem] p-8 aspect-video overflow-hidden">
            <img alt="Mango orchard" className="w-full h-full object-cover rounded-[2rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSZ0_boVwh31KyZ3qLCVW5gUJXsgcjHwW3Xn5ILeohEPN5z0w91F1YewB4hMKFjRKEogtJ6t1umZIHpvYNXszFZhRpIUF09ed9BQg8itYzkri7OXOxsgcZOkhT_xKzSlY-PnzlvhVhdXwtHHj8uaw6doMrutVXQU6CKiiaauIOrpaJonmxBQznTrWutw3BdH6yeZMLH9lWmslZsE0CC5nBOLO6bZqdEhHQmpUQ77lJSEod9Mmpe8NuNesR-xmfQuptgHNRF_9HYZc"/>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
