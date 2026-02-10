
import React from 'react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Vestido Seda Gala', category: 'Vestidos', price: '8.500 MT', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Fato Treino Urban Pink', category: 'Fato de Treino', price: '4.200 MT', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Calças Chino Slim', category: 'Calças', price: '3.800 MT', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Vestido Noite Midnight', category: 'Vestidos', price: '12.000 MT', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Casaco Camel Premium', category: 'Roupas', price: '9.500 MT', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Blusa Seda Off-White', category: 'Roupas', price: '2.900 MT', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Saia Plissada Emerald', category: 'Roupas', price: '3.400 MT', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Fato Treino Tech Black', category: 'Fato de Treino', price: '5.500 MT', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80' },
  { id: 9, name: 'Vestido Verão Tropical', category: 'Vestidos', price: '4.800 MT', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80' },
  { id: 10, name: 'Calças Alfaiataria Grey', category: 'Calças', price: '4.500 MT', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80' },
  { id: 11, name: 'Camisa Linho Sky', category: 'Roupas', price: '3.200 MT', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80' },
  { id: 12, name: 'Blazer Executive Navy', category: 'Roupas', price: '7.800 MT', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80' },
  { id: 13, name: 'Macacão Glamour Black', category: 'Roupas', price: '6.900 MT', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80' },
  { id: 14, name: 'Calções Denim Style', category: 'Calças', price: '2.500 MT', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80' },
  { id: 15, name: 'Top Designer Minimal', category: 'Roupas', price: '1.950 MT', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80' },
  { id: 16, name: 'Vestido Cocktail Rose', category: 'Vestidos', price: '5.200 MT', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80' },
  { id: 17, name: 'Calças Cargo Urban', category: 'Calças', price: '3.900 MT', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80' },
  { id: 18, name: 'Suéter Cashmere Soft', category: 'Roupas', price: '6.400 MT', image: 'https://images.unsplash.com/photo-1576188973526-0e5d742240ad?auto=format&fit=crop&w=600&q=80' },
  { id: 19, name: 'Fato Treino Elite Red', category: 'Fato de Treino', price: '5.900 MT', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80' },
  { id: 20, name: 'Vestido Longo Boho', category: 'Vestidos', price: '7.200 MT', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80' },
];

interface GalleryProps {
  onAddToCart: (product: Product) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Zayn Boutique</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Coleção exclusiva de moda selecionada para quem não abre mão do estilo. Peças únicas disponíveis para reserva.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100 flex flex-col">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-grow flex-col">
              <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-amber-600 transition-colors">{product.name}</h3>
              <p className="text-amber-600 font-bold text-xl mb-4">{product.price}</p>
              
              <button 
                onClick={() => onAddToCart(product)}
                className="mt-auto w-full border-2 border-stone-900 text-stone-900 py-2.5 rounded-xl font-bold text-sm hover:bg-stone-900 hover:text-white transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-stone-500 text-sm italic">
          * Todas as peças são limitadas. Visite-nos na Rua Da Soveste para provar a sua seleção.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
