import { Link } from 'react-router-dom';
import { Minus, Plus, ArrowRight, ShieldCheck, Truck, CreditCard, CircleDot, Circle, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function Cart() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-2">Your Fresh Basket</h1>
        <p className="text-on-surface-variant text-lg">You have 3 items in your harvest list.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          {/* Items */}
          {[
            { name: 'Washington Red Apple', desc: 'Premium Grade • Farm Fresh', price: '₹180.00 / kg', total: '₹360.00', qty: 2, tag: 'IN SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxgE4AezN_ctySwGHGIX' },
            { name: 'Local Banana', desc: 'Sweet & Creamy • 1 Dozen', price: '₹60.00 / dz', total: '₹60.00', qty: 1, tag: 'IN SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8rraMSKdYRfp0SA6p4gZD0wNk9z7FlTJj1aCGqreuRQX5Nf8EOqxKxcJ3lCZvB9mu0UxyGMe733_sRCi_mLnZvkLhYwTMLktZmQ4Qnob3QZ0pgYxn_lIRhEdm8UUHreevbTsQ09B40OkKpS447Me9n2vkofKCW0dK1qij_TK0LFjQXExkaDblnzOyNozVkumY4SZ-ksFMsr7kLob1DhdSyR5jUN4Pr1kQnayfZMCrMOJRvQQUdL9lizY_pS7gRSXX4bBPVsemY4g' },
            { name: 'Heirloom Tomato', desc: 'Rich Flavor • 500g', price: '₹40.00 / kg', total: '₹20.00', qty: 0.5, tag: 'IN SEASON', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-yfCAuQ7L8nqr5zpLpixnLQPd5oc__hg_cwWKAn4vg5OiIWOaeeTZSqet6QUgZve2Q1FVxkaZb_olgf1Llf2Q2cJtwzcrUGOkdSHy7ITTvUPrWKIPiUFxzq7xt0KTZQ5enFb75FCBt-yx5-D-BOgvHDw9hAPxcFaKSXb26YDuA9edQAWTIZRKL2d_2J3WncBEGJoN4LxnBPSYtslvsOwgrP2bNLszfpW1NRxkqcNOnfdel_ld_LbhcO88Q4ohgxA11za3CUCJc_0' }
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-3xl p-4 flex flex-col sm:flex-row gap-6 items-center shadow-sm border border-outline-variant/20">
              <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-surface-container shrink-0">
                <img alt={item.name} className="w-full h-full object-cover" src={item.img || 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0mzjE0--2KriE-K9KdXVCxCNcT0fRq-Xeu-eAee-4hDvVY_tTNG7t4vyQ1eyPGz2kLjGX8fhiRa22Lbp2pU_nG-KzFG6lKEudo46RIWUVStx3gmFClx_H_jkAt8pnITnopzS_zIItJSJCnl2XOSAn-kKAG_E37UBO0y0BDpgZvLNg8xRTFLkaWyfaN3Hg1X5PoNAbzNYhjcYpJSpkjPcaii5Yf4v3uXzqr083kDAZXAATZd0vWCkYQmiA8Wq-jVvEysp4IjcJaPI'} />
              </div>
              <div className="flex-grow flex flex-col justify-between h-full w-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-background">{item.name}</h3>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                  <button className="text-error font-medium text-sm hover:underline">Remove</button>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-4 bg-surface-container-low px-2 py-1 rounded-full">
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-4 text-center">{item.qty}</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-on-surface-variant mb-1">{item.price}</p>
                    <p className="text-2xl font-black text-secondary">{item.total}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-surface-container-low rounded-2xl p-6 flex items-start gap-4 mt-8">
            <Info className="text-primary w-6 h-6 shrink-0" />
            <p className="text-sm text-on-surface-variant">
              Delivery is available within Mangaluru city limits. Orders placed before 10 AM will be delivered the same day.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-xl border border-outline-variant/10 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span className="font-medium text-on-background">₹440.00</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Delivery Fee</span>
                <span className="font-medium text-on-background">₹40.00</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Eco-Packaging</span>
                <span className="font-medium text-on-background">₹15.00</span>
              </div>
              <div className="h-px bg-outline-variant/20 my-4"></div>
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold">Total</span>
                <span className="text-4xl font-black text-primary">₹495.00</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-primary bg-primary-container/10 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <CircleDot className="text-primary w-5 h-5" />
                    <span className="font-bold">Cash on Delivery</span>
                  </div>
                  <Truck className="text-primary w-5 h-5" />
                </label>
                <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-transparent bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <Circle className="text-on-surface-variant w-5 h-5" />
                    <span className="font-bold text-on-surface-variant">UPI / Card</span>
                  </div>
                  <CreditCard className="text-on-surface-variant w-5 h-5" />
                </label>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Confirm Order <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-on-surface-variant">
              <ShieldCheck className="w-4 h-4" />
              Secure Checkout • 100% Satisfaction Guarantee
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
