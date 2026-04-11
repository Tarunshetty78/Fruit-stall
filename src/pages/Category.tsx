import { Link } from 'react-router-dom';
import { ShoppingCart, Lock, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Category() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <section className="mb-16">
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary tracking-tight mb-4 leading-none">
          Fresh from farm <br/>to your home 🍃
        </h1>
        <p className="text-on-surface-variant max-w-xl text-lg mb-8">
          Experience the seasonal rhythm of nature with our hand-picked organic selection from the heart of Mangaluru.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-medium flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/10">
            All Produce
          </button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-medium">
            Fruits
          </button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-medium">
            Vegetables
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-on-surface-variant">Filter by:</span>
          <select className="bg-surface-container-high border-none rounded-xl px-4 py-2 text-sm focus:ring-primary/20">
            <option>All Availability</option>
            <option>In Season Only</option>
            <option>Coming Soon</option>
          </select>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((item, i) => {
          const qty = getItemQuantity(item.id);
          return (
            <div key={i} className={`group relative flex flex-col rounded-xl p-4 transition-all ${item.available ? 'bg-surface-container-lowest hover:translate-y-[-4px]' : 'bg-surface-container-lowest/60 grayscale opacity-70'}`}>
              <Link to={item.available ? `/product/${item.id}` : "#"} className="relative aspect-square overflow-hidden rounded-xl bg-surface-container mb-4 block">
                <img className={`w-full h-full object-cover ${item.available ? 'group-hover:scale-105 transition-transform duration-500' : ''}`} src={item.img} alt={item.name} />
                {item.tag && (
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${item.available ? 'bg-primary-container text-on-primary-container' : 'bg-tertiary-container text-on-tertiary-container'}`}>
                    {item.tag}
                  </span>
                )}
              </Link>
              <div className="flex flex-col flex-grow">
                <h3 className="font-headline text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-on-surface-variant mb-4 flex-grow">{item.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-secondary font-bold text-lg">₹{item.price}/{item.unit}</span>
                  {item.available ? (
                    qty > 0 ? (
                      <div className="flex items-center gap-2 bg-surface-container-high rounded-xl p-1 shadow-inner">
                        <button onClick={(e) => { e.preventDefault(); updateQuantity(item.id, qty - 1); }} className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><Minus className="w-4 h-4" /></button>
                        <span className="font-bold w-4 text-center text-sm">{qty}</span>
                        <button onClick={(e) => { e.preventDefault(); updateQuantity(item.id, qty + 1); }} className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                    ) : (
                      <button onClick={(e) => { e.preventDefault(); addToCart(item); }} className="bg-gradient-to-br from-primary to-primary-container text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    )
                  ) : (
                    <button className="bg-surface-variant text-on-surface-variant/40 p-3 rounded-lg cursor-not-allowed" disabled>
                      <Lock className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.main>
  );
}
