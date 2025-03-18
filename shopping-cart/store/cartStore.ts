import { create } from "zustand";


interface CartItem {
  quantity: number;
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (type: 'increment' | 'decrement', id: number) => void;
}

const useCartStore = create<CartState>()((set, get) => ({
  items: [],
  addToCart: (product) => ({}),
  removeFromCart: (id) => ({}),
  updateQty: (type, id) => ({}),
}));


export default useCartStore