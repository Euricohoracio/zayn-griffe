
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Você é a Consultora de Beleza Digital do Zayn Griffe, um salão de elite em Maputo, Moçambique.
Sua missão é dar conselhos de estilo, sugestões de cortes de cabelo, cuidados com a pele e tendências de beleza.
Seja elegante, encorajadora e profissional.
Sempre mencione que o Zayn Griffe na Rua Da Soveste, Maputo, é o lugar ideal para realizar essas transformações.
Se o usuário perguntar sobre preços ou marcações, sugira usar o formulário de reserva no site ou ligar para 84 270 3205.
Mantenha suas respostas concisas e glamourosas.
`;

export const getBeautyConsultation = async (history: ChatMessage[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // In a real app we'd pass history here, but for simplicity we'll just send the latest
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, estou tendo um momento de beleza agora. Pode tentar novamente em instantes?";
  }
};
