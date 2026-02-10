
import React, { useState, useRef, useEffect } from 'react';
import { getBeautyConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a sua Consultora de Beleza Digital do Zayn Griffe. Como posso ajudar a realçar o seu brilho hoje? Peça sugestões de cortes, cores ou cuidados com a pele!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getBeautyConsultation(messages, input);
    setMessages(prev => [...prev, { role: 'model', text: response || 'Houve um erro na consulta.' }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">Sua Consultora de Estilo Pessoal</h2>
        <p className="text-stone-400 text-lg mb-8 leading-relaxed">
          Powered by Artificial Intelligence, a nossa assistente digital conhece as últimas tendências globais e o clima de Maputo para lhe dar os melhores conselhos de beleza.
        </p>
        <ul className="space-y-4 mb-8">
          {[
            'Sugestões de cortes por formato de rosto',
            'Cuidado capilar em climas húmidos',
            'Tendências de manicure para 2024',
            'Dicas de estética para pele vibrante'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-stone-300">
              <span className="w-5 h-5 flex items-center justify-center bg-amber-600 rounded-full text-[10px] font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/2 w-full">
        <div className="bg-stone-800 rounded-3xl shadow-2xl border border-stone-700 overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-stone-700/50 p-4 border-b border-stone-600 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center animate-pulse">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-widest">IA Zayn Griffe</p>
              <p className="text-[10px] text-stone-400">Consultora Online 24/7</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-amber-600 text-white rounded-br-none' 
                    : 'bg-stone-700 text-stone-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-700 text-stone-100 rounded-2xl rounded-bl-none px-4 py-3 text-sm animate-pulse">
                  Pensando no seu estilo...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-stone-700/30 border-t border-stone-600">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte sobre um novo visual..."
                className="flex-grow bg-stone-900 border border-stone-600 text-white rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;
