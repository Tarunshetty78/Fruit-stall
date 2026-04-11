import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-900 w-full mt-20 pt-12 pb-8 border-t border-zinc-200/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-lg font-bold text-green-800 dark:text-green-400 font-headline uppercase tracking-widest">
            Shree Rajarajeshwari
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs">
            Curating the finest harvest since 1998. Dedicated to quality, sustainability, and Mangalorean heritage.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 text-green-800 opacity-80 hover:opacity-100 cursor-pointer" />
            <Instagram className="w-5 h-5 text-green-800 opacity-80 hover:opacity-100 cursor-pointer" />
            <Globe className="w-5 h-5 text-green-800 opacity-80 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <p className="font-bold text-orange-900 dark:text-orange-200 text-sm">Navigation</p>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-zinc-500 dark:text-zinc-400 hover:text-green-700 transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/shop" className="text-zinc-500 dark:text-zinc-400 hover:text-green-700 transition-colors text-sm">Sustainability</Link></li>
              <li><Link to="/shop" className="text-zinc-500 dark:text-zinc-400 hover:text-green-700 transition-colors text-sm">Wholesale</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-bold text-orange-900 dark:text-orange-200 text-sm">Customer Care</p>
            <ul className="space-y-2">
              <li><Link to="/" className="text-zinc-500 dark:text-zinc-400 hover:text-green-700 transition-colors text-sm">Shipping Info</Link></li>
              <li><Link to="/" className="text-zinc-500 dark:text-zinc-400 hover:text-green-700 transition-colors text-sm">Return Policy</Link></li>
              <li><Link to="/" className="text-zinc-500 dark:text-zinc-400 hover:text-green-700 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-orange-900 dark:text-orange-200 text-sm">Visit Us</p>
          <div className="flex items-start gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
            <MapPin className="w-4 h-4 mt-0.5" />
            <span>Kadri Kambla, Mallikatte, Mangaluru</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
            <Phone className="w-4 h-4" />
            <span>8971197957</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
            <Mail className="w-4 h-4" />
            <span>hello@sr-fruits.com</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pt-12 mt-12 border-t border-zinc-200/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          © 2024 Shree Rajarajeshwari Fruits & Vegetables. Farm to Table Freshness.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-zinc-400">
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
