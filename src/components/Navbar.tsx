import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-surface/80 dark:bg-zinc-950/80 glass-nav docked full-width top-0 sticky z-50 bg-gradient-to-b from-green-50/50 to-transparent">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-black text-green-900 dark:text-green-50 aspect-square flex items-center font-headline tracking-tight">
            SRFV
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-green-700 dark:text-green-400 font-semibold border-b-2 border-green-700 font-headline">Home</Link>
            <Link to="/shop" className="text-zinc-600 dark:text-zinc-400 hover:text-green-800 transition-colors duration-300 font-headline">Shop</Link>
            <Link to="/shop" className="text-zinc-600 dark:text-zinc-400 hover:text-green-800 transition-colors duration-300 font-headline">Organic</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-high px-4 py-2 rounded-full relative">
            <Search className="text-outline w-4 h-4 absolute left-4" />
            <input className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-outline w-48 pl-8" placeholder="Search harvest..." type="text" />
          </div>
          <Link to="/cart" className="relative p-2 hover:bg-green-50/50 dark:hover:bg-green-900/20 transition-colors duration-300 rounded-full scale-95 active:scale-90 transition-transform">
            <ShoppingCart className="text-green-800 dark:text-green-500 w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-secondary text-on-secondary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
