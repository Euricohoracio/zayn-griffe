
import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  cartCount: number;
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, cartCount, onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'galeria', label: 'Boutique' },
    { id: 'consultora', label: 'Consultora AI' },
    { id: 'reserva', label: 'Reservar' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('inicio')}>
            <span className="text-2xl font-serif font-bold tracking-tighter text-stone-900">ZAYN GRIFFE</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id ? 'text-amber-600' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="w-px h-6 bg-stone-200 mx-2"></div>

            <button 
              onClick={onCartOpen}
              className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollTo('reserva')}
              className="bg-stone-900 text-white px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-stone-800 transition-all transform hover:scale-105"
            >
              Agendar Agora
            </button>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={onCartOpen} className="relative p-2 text-stone-600">
               {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-stone-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
