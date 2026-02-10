
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold tracking-tighter mb-6">ZAYN GRIFFE</h2>
            <p className="text-stone-400 max-w-md leading-relaxed mb-8">
              A nossa paixão é elevar a auto-estima de cada cliente através de um serviço de excelência, num ambiente de puro luxo e conforto no centro de Maputo.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-stone-400 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Localização</h4>
            <address className="not-italic text-stone-400 space-y-2">
              <p>Rua Da Soveste, 3H8X+5X9</p>
              <p>Maputo, Moçambique</p>
              <p className="pt-4 font-bold text-white">84 270 3205</p>
            </address>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Horário</h4>
            <div className="text-stone-400 space-y-2">
              <div className="flex justify-between">
                <span>Segunda - Sábado</span>
                <span>08:00 - 19:30</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span>Encerrado</span>
              </div>
              <div className="pt-4">
                <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded uppercase font-bold">Aberto agora</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:row-reverse md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
          <p>© 2024 Zayn Griffe - Salão de Beleza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
