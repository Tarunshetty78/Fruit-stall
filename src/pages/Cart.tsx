import { Link } from 'react-router-dom';
import { Minus, Plus, ArrowRight, ShieldCheck, Truck, Store, CircleDot, Circle, Info, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount } = useCart();
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
  const [customerName, setCustomerName] = useState('');
  const [fulfillmentMethod, setFulfillmentMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
  
  const deliveryFee = cartTotal > 0 && fulfillmentMethod === 'delivery' ? 40 : 0;
  const ecoPackaging = cartTotal > 0 ? 15 : 0;
  const finalTotal = cartTotal + deliveryFee + ecoPackaging;

  const handleCheckout = async () => {
    if (!customerName.trim()) {
      setStatusType('error');
      setStatusMessage('Please enter your name before checkout.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      const response = await fetch(`${apiBaseUrl}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: customerName.trim(),
          paymentMethod: fulfillmentMethod === 'delivery' ? 'Home Delivery' : 'In-person Pickup',
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            unitPrice: item.price,
            unit: item.unit,
            lineTotal: item.price * item.quantity,
          })),
          totals: {
            subtotal: cartTotal,
            deliveryFee,
            ecoPackaging,
            grandTotal: finalTotal,
          },
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      const data = contentType.includes('application/json')
        ? ((await response.json()) as { message?: string; orderId?: string })
        : ({ message: await response.text() } as { message?: string; orderId?: string });

      if (!response.ok) {
        throw new Error(data.message || `Failed to place order (HTTP ${response.status}).`);
      }

      clearCart();
      setCustomerName('');
      setStatusType('success');
      setStatusMessage(`Order placed successfully. Reference: ${data.orderId || 'N/A'}. Thank you for shopping with us!`);
    } catch (error) {
      const message =
        error instanceof TypeError
          ? 'Unable to reach the order service. Please verify backend URL/CORS settings and try again.'
          : error instanceof Error
            ? error.message
            : 'Failed to place order.';
      setStatusType('error');
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && statusType === 'success' && statusMessage) {
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl font-extrabold text-on-background mb-4">Order Confirmed</h1>
        <p className="text-on-surface-variant text-lg max-w-xl mb-8">{statusMessage}</p>
        <Link to="/shop" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          Continue Shopping
        </Link>
      </motion.main>
    );
  }

  if (items.length === 0) {
    return (
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-on-surface-variant" />
        </div>
        <h1 className="text-3xl font-bold text-on-background mb-4">Your basket is empty</h1>
        <p className="text-on-surface-variant mb-8 max-w-md">Looks like you haven't added any fresh harvest to your basket yet.</p>
        <Link to="/shop" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          Start Shopping
        </Link>
      </motion.main>
    );
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-2">Your Fresh Basket</h1>
        <p className="text-on-surface-variant text-lg">You have {cartCount} item{cartCount !== 1 ? 's' : ''} in your harvest list.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          {/* Items */}
          {items.map((item) => (
            <div key={item.id} className="bg-surface-container-lowest rounded-3xl p-4 flex flex-col sm:flex-row gap-6 items-center shadow-sm border border-outline-variant/20">
              <Link to={`/product/${item.id}`} className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-surface-container shrink-0 block">
                <img alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src={item.img} />
              </Link>
              <div className="flex-grow flex flex-col justify-between h-full w-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Link to={`/product/${item.id}`} className="text-xl font-bold text-on-background hover:text-primary transition-colors">{item.name}</Link>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-error font-medium text-sm hover:underline">Remove</button>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-4 bg-surface-container-low px-2 py-1 rounded-full">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-on-surface-variant mb-1">₹{item.price} / {item.unit}</p>
                    <p className="text-2xl font-black text-secondary">₹{item.price * item.quantity}</p>
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
                <span className="font-medium text-on-background">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Delivery Fee</span>
                <span className="font-medium text-on-background">{fulfillmentMethod === 'pickup' ? 'Free' : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Eco-Packaging</span>
                <span className="font-medium text-on-background">₹{ecoPackaging}</span>
              </div>
              <div className="h-px bg-outline-variant/20 my-4"></div>
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold">Total</span>
                <span className="text-4xl font-black text-primary">₹{finalTotal}</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <label htmlFor="customerName" className="font-bold text-sm uppercase tracking-widest text-on-surface-variant block mb-3">
                  Customer Name
                </label>
                <input
                  id="customerName"
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-on-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <h3 className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">Fulfillment Method</h3>
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${fulfillmentMethod === 'delivery' ? 'border-primary bg-primary-container/10' : 'border-transparent bg-surface-container-low hover:bg-surface-container'}`}>
                  <div className="flex items-center gap-3">
                    {fulfillmentMethod === 'delivery' ? <CircleDot className="text-primary w-5 h-5" /> : <Circle className="text-on-surface-variant w-5 h-5" />}
                    <span className={`font-bold ${fulfillmentMethod === 'delivery' ? 'text-on-background' : 'text-on-surface-variant'}`}>Delivery</span>
                  </div>
                  <Truck className={`w-5 h-5 ${fulfillmentMethod === 'delivery' ? 'text-primary' : 'text-on-surface-variant'}`} />
                  <input
                    type="radio"
                    name="fulfillment"
                    className="sr-only"
                    checked={fulfillmentMethod === 'delivery'}
                    onChange={() => setFulfillmentMethod('delivery')}
                  />
                </label>
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${fulfillmentMethod === 'pickup' ? 'border-primary bg-primary-container/10' : 'border-transparent bg-surface-container-low hover:bg-surface-container'}`}>
                  <div className="flex items-center gap-3">
                    {fulfillmentMethod === 'pickup' ? <CircleDot className="text-primary w-5 h-5" /> : <Circle className="text-on-surface-variant w-5 h-5" />}
                    <span className={`font-bold ${fulfillmentMethod === 'pickup' ? 'text-on-background' : 'text-on-surface-variant'}`}>In-person Pickup</span>
                  </div>
                  <Store className={`w-5 h-5 ${fulfillmentMethod === 'pickup' ? 'text-primary' : 'text-on-surface-variant'}`} />
                  <input
                    type="radio"
                    name="fulfillment"
                    className="sr-only"
                    checked={fulfillmentMethod === 'pickup'}
                    onChange={() => setFulfillmentMethod('pickup')}
                  />
                </label>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Placing Order...' : 'Confirm Order'} <ArrowRight className="w-5 h-5" />
            </button>

            {statusMessage && (
              <p className={`mt-4 text-sm ${statusType === 'success' ? 'text-green-600' : 'text-error'}`}>
                {statusMessage}
              </p>
            )}

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
