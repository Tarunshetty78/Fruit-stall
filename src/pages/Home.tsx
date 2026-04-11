import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Plus, Minus, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const freshArrivals = products.slice(0, 4);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 pt-12 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-container/20 to-surface z-0"></div>
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-container/40 text-on-primary-container rounded-full text-xs font-bold tracking-widest uppercase">
              Harvest Season 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-[1.1]">
              Fresh from farm to your home <span className="inline-block align-middle">🍃</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed">
              Hand-picked daily from local orchards in Mangaluru. Bringing nature's untamed vitality directly to your kitchen table.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop" className="bg-gradient-to-r from-primary to-primary-container px-8 py-4 rounded-xl text-on-primary font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                Explore Harvest
              </Link>
              <button className="px-8 py-4 rounded-xl border border-outline/20 font-semibold text-primary hover:bg-surface-container-low transition-colors">
                Our Story
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
              <img alt="Fresh vegetables box" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGGk1dNmHhadm7d0Cf1VSaWKzMuBRvACX4ZvY7mskBwkutivEgccSa_YRE72p7V24JlZRg7PyiuliZb-QiVbkWJ36u3p7rAjg9Tk6WawvwmpqjaI__dfEcbGAXuUUi6B7srsEpySen4Ob1yi35x0cO45b0shmi3moodRr-szK9cAwXzRt68VLQUbF2dsJoxwWYtFFr9Z0FdjYWl-rdwPEgzt98-KnnyUzBVqITiNIUCmKie1Stb7l1wCDEP7C5bi1Plac-vtB8Yzw"/>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-3xl shadow-xl flex items-center gap-4 -rotate-2">
              <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center">
                <Leaf className="text-on-tertiary-container w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-background">100% Organic</p>
                <p className="text-xs text-on-surface-variant">Certified Earth-Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Bento */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-on-background tracking-tight">Curated Categories</h2>
            <p className="text-on-surface-variant">Season's best picks for your dietary needs</p>
          </div>
          <Link to="/shop" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Browse All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] md:h-[500px]">
          <Link to="/shop" className="md:col-span-8 relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
            <img alt="Fruits category" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjL-KTebYI7sn5x0X_Zxjf_UZjEwbIPDHVE4OIkpCv6mJaf899dhEqFYPoito0A9L_HMNDFoO4gk6iaZR3plLmOF7ChiTilDWXXGbSYg2HxzHrvOczpvBKuhTg_w2I3kkSNJ4ezJbizW1F1lTCNWnHqYCPVF-tW-RxWjufv_f1klkRxSLpDGtkwyhsQ-oTcP8duLCvC-s1pwSGRtHIIpgTfnuLPFqtbwOqlgHcxwvJugjBtKSrUQhSUL59hVpMc4BkCYn-A-TUv7M"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-bold text-white mb-2">Fruits 🍎</h3>
              <p className="text-white/80 max-w-xs">Sweet, juicy, and packed with vitamins. From local mangoes to exotic berries.</p>
            </div>
          </Link>
          <Link to="/shop" className="md:col-span-4 relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
            <img alt="Vegetables category" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl3nn8YfWKwGO9-if80eI4U5Uvy5ZlDeAzozJuoxDa1xDPxJkSuOV3p99KqjBL0iYeIwLb5_OUS3fQkAGcHoK5zLRhduv49hTohxosZC5MbmvPyTIvmPz_N4ITyPscFFG0_DUZ835zPUhSStyo0-WB_gu8qoVKso-TlnKDHkGdrRfL8Lu2b6_ARsHD65dATL44Qvz3GhyW2E9ylgyIWwi4vtjcK3u0BobzBTixaXNH2VHeM3IC8ywWMBiToT8dVG1qq6YBWADnsh0"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-bold text-white mb-2">Vegetables 🥦</h3>
              <p className="text-white/80">Farm-fresh greens and hearty tubers for your daily meals.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Fresh Arrivals */}
      <section className="bg-surface-container-low py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-on-background tracking-tight">Fresh Arrivals</h2>
            <p className="text-on-surface-variant">Straight from the morning harvest</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {freshArrivals.map((item, i) => {
              const qty = getItemQuantity(item.id);
              return (
                <div key={i} className="group bg-surface-container-lowest rounded-[2rem] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                  {item.tag && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.tag === 'LIMITED' ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-primary-container text-on-primary-container'}`}>
                        {item.tag}
                      </span>
                    </div>
                  )}
                  <Link to={`/product/${item.id}`} className="block aspect-square rounded-2xl overflow-hidden mb-6 bg-surface-container">
                    <img alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img}/>
                  </Link>
                  <div className="space-y-1 flex-grow">
                    <h4 className="text-xl font-bold text-on-background">{item.name}</h4>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-black text-secondary">₹{item.price}</span>
                    {qty > 0 ? (
                      <div className="flex items-center gap-3 bg-surface-container-high rounded-xl p-1.5 shadow-inner">
                        <button onClick={(e) => { e.preventDefault(); updateQuantity(item.id, qty - 1); }} className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><Minus className="w-4 h-4" /></button>
                        <span className="font-bold w-4 text-center text-sm">{qty}</span>
                        <button onClick={(e) => { e.preventDefault(); updateQuantity(item.id, qty + 1); }} className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                    ) : (
                      <button onClick={(e) => { e.preventDefault(); addToCart(item); }} className="w-12 h-12 bg-primary rounded-2xl text-on-primary flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90 transition-transform">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-primary-container rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-on-primary-container tracking-tight mb-6">Join our organic circle.</h2>
            <p className="text-on-primary-container/80 text-lg mb-10 leading-relaxed">Get weekly tips on seasonal eating and exclusive first access to limited boutique harvests from our partner farms.</p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 px-8 py-4 rounded-2xl bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary text-on-background shadow-inner" placeholder="Your email address" type="email"/>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
