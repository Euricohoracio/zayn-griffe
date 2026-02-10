
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AIAdvisor from './components/AIAdvisor';
import Booking from './components/Booking';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicos', 'galeria', 'consultora', 'reserva'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header activeSection={activeSection} cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} onCartOpen={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>

        <section id="servicos" className="py-20 bg-white">
          <Services />
        </section>

        <section id="galeria" className="py-20 bg-stone-50">
          <Gallery onAddToCart={addToCart} />
        </section>

        <section id="consultora" className="py-20 bg-stone-900 text-white">
          <AIAdvisor />
        </section>

        <section id="reserva" className="py-20 bg-white">
          <Booking />
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
      />

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-[90] bg-stone-900 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-600 transition-all transform hover:scale-110 active:scale-95 group"
        >
          <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
            {cart.reduce((sum, i) => sum + i.quantity, 0)}
          </span>
          <svg className="w-6 h-6 group-hover:animate-wiggle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
