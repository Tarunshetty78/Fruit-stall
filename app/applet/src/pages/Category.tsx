import { Link } from 'react-router-dom';
import { ShoppingCart, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Category() {
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
        {[
          { name: 'Crisp Red Apple', desc: 'Directly sourced from high-altitude orchards, bursting with sweetness.', price: '₹180/kg', tag: 'IN SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0mzjE0--2KriE-K9KdXVCxCNcT0fRq-Xeu-eAee-4hDvVY_tTNG7t4vyQ1eyPGz2kLjGX8fhiRa22Lbp2pU_nG-KzFG6lKEudo46RIWUVStx3gmFClx_H_jkAt8pnITnopzS_zIItJSJCnl2XOSAn-kKAG_E37UBO0y0BDpgZvLNg8xRTFLkaWyfaN3Hg1X5PoNAbzNYhjcYpJSpkjPcaii5Yf4v3uXzqr083kDAZXAATZd0vWCkYQmiA8Wq-jVvEysp4IjcJaPI', available: true },
          { name: 'Local Banana', desc: 'Sweet, creamy texture, perfect for your morning energy boost.', price: '₹60/dozen', tag: 'IN SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8rraMSKdYRfp0SA6p4gZD0wNk9z7FlTJj1aCGqreuRQX5Nf8EOqxKxcJ3lCZvB9mu0UxyGMe733_sRCi_mLnZvkLhYwTMLktZmQ4Qnob3QZ0pgYxn_lIRhEdm8UUHreevbTsQ09B40OkKpS447Me9n2vkofKCW0dK1qij_TK0LFjQXExkaDblnzOyNozVkumY4SZ-ksFMsr7kLob1DhdSyR5jUN4Pr1kQnayfZMCrMOJRvQQUdL9lizY_pS7gRSXX4bBPVsemY4g', available: true },
          { name: 'Alphonso Mango', desc: 'King of mangoes. Returning next summer!', price: '--', tag: 'OUT OF SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1oDJ01jD9aUVRlf3EVhlULm_f5uogqJ2MjCX8BB2nhCJ-nehSNa12hi8WY2evQjy2K3VkygHVaQuwT4LaVeudQsbUtH30cKTMgXWvzP_9IBA11yJqx-gIwZUjR8e6I5bHkW1lGBzCX56-G-MuY4v2zd8XpaytBycNlcWdHApf8CGqX7yJuOzCirkb3WNj9-NZCSda_A1hEWQYLET-fRo-OjymVDYLj0Fhd3fTiiuTM5UMgT1tvK5ULJLaGX4ovrzclNKdX9xxlFs', available: false },
          { name: 'Seedless Watermelon', desc: 'Refreshment delayed. Expecting new harvest soon.', price: '--', tag: 'OUT OF SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkKn3JeJ_iRfI723cHJI4OmYRzhegBb2dbl0yaLwkYjHgwx5TKB1ZH-IE8-EKsBzmSZEvNTvcm52lg6eGChKjeAGiSAo7ZyQ62Pyzl2yqYhjp-eNLXt6BIMg3aGRDU0o22Ay3sKJSCq5woZTk7-xZ4qzBSQD2jVQFtAByG9iXjemTS2s5y37sEMvoTox9YMTn8yO2f6jnJA-yVT3ZZtvJJC2mmHWOyFI6nd2JgxkzSDXi4cFoMyAnebrvOfXSTc7n0rucCTQbhu04', available: false },
          { name: 'Heirloom Tomato', desc: 'Rich, savory flavor profile, perfect for sauces and salads.', price: '₹40/kg', tag: 'IN SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-yfCAuQ7L8nqr5zpLpixnLQPd5oc__hg_cwWKAn4vg5OiIWOaeeTZSqet6QUgZve2Q1FVxkaZb_olgf1Llf2Q2cJtwzcrUGOkdSHy7ITTvUPrWKIPiUFxzq7xt0KTZQ5enFb75FCBt-yx5-D-BOgvHDw9hAPxcFaKSXb26YDuA9edQAWTIZRKL2d_2J3WncBEGJoN4LxnBPSYtslvsOwgrP2bNLszfpW1NRxkqcNOnfdel_ld_LbhcO88Q4ohgxA11za3CUCJc_0', available: true },
          { name: 'Russet Potato', desc: 'Versatile and starchy, freshly dug from local Mangaluru soil.', price: '₹30/kg', tag: 'IN SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClPAsxT2T-o236MOdLKX6nA_7FX0u8hFwYZbvOqdf0qqV2MmueIzdhMkY8GuU6YYenEa0Jm7wGYJSmxcwFg7r-qsTf1nB4Hqb-UE7W9JnHNuVuAMOP-sr0u_vibx__kzUx_CCl32bag3GPv14pjq16TTh9xd_SI_9bsg3UZAxJzrqGZ0Ftdzg2S0KWIWs5CgpLj9Qq0l4qiho9-bjjM5G80Fkf3suKIBGebID8QkJF6trF27BY3neQtQc11kUWCez1u4WnDkRJ-FA', available: true },
          { name: 'Garden Carrot', desc: 'Crunchy and sweet, our winter harvest has concluded.', price: '--', tag: 'OUT OF SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq1OfVOIemyiv2_j_6cJUTloHgojQmhYbzDnB8oW7bbpxfJZX0q8MgR6PJr-RZF5KhxoxeVWvCar9nfs9pBFEsx8wgrIvD7n5XQUSVJ-cDSTaX4TTy8pOQkxPsCNnZRp4wLTLTT4Apwme6S2jOlDofZtig2AVPSHKLZbwvjPNArvatUMeY87lbIG7aE7mE9Ac2BxS0BQIkBypUlOOjX-3QnlFaFcDnFqNI0cdeM8kSiGlILPeK7l0nG03qKVKgyyTJ-YUMes0-Mhk', available: false }
        ].map((item, i) => (
          <div key={i} className={`group relative flex flex-col rounded-xl p-4 transition-all ${item.available ? 'bg-surface-container-lowest hover:translate-y-[-4px]' : 'bg-surface-container-lowest/60 grayscale opacity-70'}`}>
            <Link to={item.available ? "/product" : "#"} className="relative aspect-square overflow-hidden rounded-xl bg-surface-container mb-4 block">
              <img className={`w-full h-full object-cover ${item.available ? 'group-hover:scale-105 transition-transform duration-500' : ''}`} src={item.img} alt={item.name} />
              <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${item.available ? 'bg-primary-container text-on-primary-container' : 'bg-tertiary-container text-on-tertiary-container'}`}>
                {item.tag}
              </span>
            </Link>
            <div className="flex flex-col flex-grow">
              <h3 className="font-headline text-xl font-bold mb-1">{item.name}</h3>
              <p className="text-sm text-on-surface-variant mb-4 flex-grow">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-secondary font-bold text-lg">{item.price}</span>
                {item.available ? (
                  <button className="bg-gradient-to-br from-primary to-primary-container text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                ) : (
                  <button className="bg-surface-variant text-on-surface-variant/40 p-3 rounded-lg cursor-not-allowed" disabled>
                    <Lock className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.main>
  );
}
