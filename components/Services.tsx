
import React, { useState } from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte e Styling Premium',
    description: 'Transformação completa com lavagem terapêutica e finalização com produtos de elite.',
    price: 'A partir de 1.500 MT',
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Coloração & Balayage',
    description: 'Técnicas modernas de iluminação que respeitam a saúde do seu fio.',
    price: 'A partir de 3.500 MT',
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Manicure Gel & Luxury Art',
    description: 'Cuidado minucioso das mãos com acabamento em gel e design exclusivo Zayn.',
    price: 'A partir de 1.200 MT',
    category: 'Unhas',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b0ec0a99?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Tratamentos Faciais',
    description: 'Limpeza profunda e hidratação rejuvenescendo a sua pele contra o sol de Maputo.',
    price: 'A partir de 2.000 MT',
    category: 'Estética',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Pedicure Relax & Spa',
    description: 'Um ritual de relaxamento para os seus pés com esfoliação e óleos essenciais.',
    price: 'A partir de 1.000 MT',
    category: 'Unhas',
    image: 'https://images.unsplash.com/photo-1519415749034-448dc813f309?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Barba à Navalha Ritual',
    description: 'Cuidado clássico com toalhas quentes e massagem facial relaxante.',
    price: 'A partir de 600 MT',
    category: 'Barbearia',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Maquilhagem Profissional',
    description: 'Look personalizado para eventos ou gala, realçando a sua beleza natural.',
    price: 'A partir de 2.500 MT',
    category: 'Estética',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Massagem Relaxante',
    description: 'Alívio do stress e tensão muscular num ambiente de pura tranquilidade.',
    price: 'A partir de 3.000 MT',
    category: 'Estética',
    image: 'https://images.unsplash.com/photo-1544161515-4ae6ce6e8347?auto=format&fit=crop&w=800&q=80'
  }
];

const Services: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const categories = ['Todos', 'Cabelo', 'Unhas', 'Estética', 'Barbearia'];

  const filteredServices = filter === 'Todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  const handleBooking = (serviceName: string) => {
    const phoneNumber = '258842703205';
    const message = `Olá! Gostaria de agendar o serviço [${serviceName}]. Poderia informar os horários disponíveis?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Nossos Serviços</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Oferecemos uma gama completa de cuidados de luxo. Cada serviço é um ritual de perfeição desenhado para si.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-stone-900 text-white shadow-lg' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map(service => (
          <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-amber-600 uppercase tracking-tighter shadow-sm">
                {service.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-stone-900 mb-2 leading-tight">{service.name}</h3>
              <p className="text-stone-500 text-xs mb-4 line-clamp-3">
                {service.description}
              </p>
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-stone-50">
                <span className="text-stone-900 font-bold text-sm">{service.price}</span>
                <button 
                  onClick={() => handleBooking(service.name)}
                  className="bg-stone-900 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-amber-600 transition-colors"
                >
                  Agendar via WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
