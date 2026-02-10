
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: 'Cabelo',
    data: '',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Marcar Agendamento</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-stone-600">
          Escolha o seu momento de cuidado. Entraremos em contacto para confirmar.
        </p>
      </div>

      <div className="bg-stone-50 rounded-3xl p-8 md:p-12 shadow-inner border border-stone-100">
        {submitted ? (
          <div className="text-center py-20 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-2">Pedido Recebido!</h3>
            <p className="text-stone-600">Obrigado {formData.nome}. Entraremos em contacto brevemente.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase">Nome Completo</label>
              <input 
                required
                type="text" 
                placeholder="Seu nome"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 focus:outline-none transition-all"
                value={formData.nome}
                onChange={e => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase">Telefone</label>
              <input 
                required
                type="tel" 
                placeholder="Ex: 84 270 3205"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 focus:outline-none transition-all"
                value={formData.telefone}
                onChange={e => setFormData({...formData, telefone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase">Serviço Pretendido</label>
              <select 
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 focus:outline-none transition-all"
                value={formData.servico}
                onChange={e => setFormData({...formData, servico: e.target.value})}
              >
                <option>Cabelo</option>
                <option>Unhas</option>
                <option>Estética</option>
                <option>Barbearia</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase">Data Preferencial</label>
              <input 
                required
                type="date" 
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 focus:outline-none transition-all"
                value={formData.data}
                onChange={e => setFormData({...formData, data: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase">Mensagem Adicional (Opcional)</label>
              <textarea 
                rows={4}
                placeholder="Algum pedido especial?"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-600 focus:outline-none transition-all"
                value={formData.mensagem}
                onChange={e => setFormData({...formData, mensagem: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 mt-4">
              <button 
                type="submit"
                className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all shadow-lg transform hover:-translate-y-1"
              >
                Solicitar Reserva
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;
