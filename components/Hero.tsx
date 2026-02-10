
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80" 
          alt="Zayn Griffe Luxury Salon Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50 backdrop-grayscale-[0.1]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-white uppercase bg-amber-600/80 backdrop-blur-sm rounded">
          Bem-vindo ao Luxo em Maputo
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          A Sua Beleza <br /><span className="italic font-light">Elevada a Arte</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Onde a tradição moçambicana encontra o estilo cosmopolita. Transforme o seu visual com os melhores especialistas de Maputo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-stone-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105 shadow-xl"
          >
            Marcar Encontro
          </button>
          <button 
             onClick={() => document.getElementById('consultora')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all shadow-xl"
          >
            Falar com a Consultora AI
          </button>
        </div>
      </div>

      {/* Floating Info */}
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden md:flex justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex gap-12 text-white">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-tighter opacity-70">Localização</span>
            <span className="font-medium">Rua Da Soveste, Maputo</span>
          </div>
          <div className="w-px bg-white/20 h-full"></div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-tighter opacity-70">Contacto</span>
            <span className="font-medium">84 270 3205</span>
          </div>
          <div className="w-px bg-white/20 h-full"></div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-tighter opacity-70">Horário</span>
            <span className="font-medium">Seg-Sáb: 08:00 - 19:30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
