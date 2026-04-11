import { Link, useParams } from 'react-router-dom';
import { ChevronRight, CalendarOff, ShoppingCart, Bell, Leaf, BadgeCheck, ArrowRight, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Product() {
  const { id } = useParams();
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold text-on-background mb-4">Product Not Found</h1>
        <p className="text-on-surface-variant mb-8">The harvest you are looking for is not available.</p>
        <Link to="/shop" className="text-primary font-bold hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const qty = getItemQuantity(product.id);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <nav className="mb-12 flex items-center gap-2 text-on-surface-variant text-sm font-label">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/shop" className="hover:text-primary transition-colors">{product.category}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-7 relative">
          <div className="relative z-10 bg-surface-container-lowest rounded-[2rem] overflow-hidden editorial-shadow p-4 aspect-[4/5] md:aspect-square flex items-center justify-center">
            <img alt={product.name} className="w-full h-full object-cover rounded-[1.5rem]" src={product.img}/>
            {!product.available && (
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-error-container text-on-error-container px-6 py-2 rounded-full font-headline font-bold text-sm tracking-wide flex items-center gap-2 editorial-shadow">
                  <CalendarOff className="w-5 h-5" />
                  ❌ Out of Season
                </div>
              </div>
            )}
            {product.available && product.tag && (
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-headline font-bold text-sm tracking-wide flex items-center gap-2 editorial-shadow">
                  {product.tag}
                </div>
              </div>
            )}
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary-container/10 rounded-full blur-2xl -z-10"></div>
        </div>

        <div className="lg:col-span-5 flex flex-col pt-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-background tracking-tighter mb-4 leading-none">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-bold text-secondary">₹{product.price}</span>
              <span className="text-on-surface-variant font-label">/ {product.unit}</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h3 className="text-sm font-headline font-bold uppercase tracking-widest text-on-surface-variant mb-3">The Profile</h3>
              <p className="text-lg text-on-surface leading-relaxed font-body">
                {product.longDesc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest border-b-2 border-primary/10 rounded-2xl p-4 flex flex-col gap-1">
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-tighter">Origin</span>
                <span className="text-primary font-semibold">{product.origin}</span>
              </div>
              <div className="bg-surface-container-lowest border-b-2 border-primary/10 rounded-2xl p-4 flex flex-col gap-1">
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-tighter">Vitamin</span>
                <span className="text-primary font-semibold">{product.vitamins}</span>
              </div>
            </div>

            <div className="pt-8 flex flex-col gap-4">
              {!product.available ? (
                <>
                  <button className="w-full py-5 rounded-xl bg-surface-variant text-on-surface-variant font-headline font-bold flex items-center justify-center gap-3 cursor-not-allowed opacity-60" disabled>
                    <ShoppingCart className="w-5 h-5" />
                    Currently Unavailable
                  </button>
                  <button className="w-full py-4 rounded-xl outline outline-1 outline-outline-variant/30 text-primary font-headline font-bold hover:bg-primary-container/20 transition-all duration-300 flex items-center justify-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notify When Back in Season
                  </button>
                </>
              ) : (
                qty > 0 ? (
                  <div className="flex items-center justify-between bg-surface-container-high rounded-2xl p-2 shadow-inner">
                    <button onClick={() => updateQuantity(product.id, qty - 1)} className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors shadow-sm"><Minus className="w-6 h-6" /></button>
                    <span className="font-bold text-xl">{qty} in basket</span>
                    <button onClick={() => updateQuantity(product.id, qty + 1)} className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors shadow-sm"><Plus className="w-6 h-6" /></button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(product)} className="w-full py-5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Basket
                  </button>
                )
              )}
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
              Nature doesn't rush. Our produce is only harvested when it achieves peak sun-ripeness. While some items are resting in the off-season, their flavor profile is being curated by the rich soil and coastal breeze of Mangaluru.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 text-primary font-bold group">
              Learn about our growing process
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-surface-container rounded-[3rem] p-8 aspect-video overflow-hidden">
            <img alt="Orchard" className="w-full h-full object-cover rounded-[2rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSZ0_boVwh31KyZ3qLCVW5gUJXsgcjHwW3Xn5ILeohEPN5z0w91F1YewB4hMKFjRKEogtJ6t1umZIHpvYNXszFZhRpIUF09ed9BQg8itYzkri7OXOxsgcZOkhT_xKzSlY-PnzlvhVhdXwtHHj8uaw6doMrutVXQU6CKiiaauIOrpaJonmxBQznTrWutw3BdH6yeZMLH9lWmslZsE0CC5nBOLO6bZqdEhHQmpUQ77lJSEod9Mmpe8NuNesR-xmfQuptgHNRF_9HYZc"/>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
