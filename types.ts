
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Cabelo' | 'Unhas' | 'Estética' | 'Barbearia';
  image: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
