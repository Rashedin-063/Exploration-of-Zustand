import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { Product } from '@/types/types';
import toast from 'react-hot-toast';


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

// const demoItems: CartItem = [
//   {
//     id: 1,
//     title: 'Product 1',
//     price: 19.99,
//     quantity: 2,
//     image: '/images/red.jpeg?height=80&width=80',
//   },
//   {
//     id: 2,
//     title: 'Product 2',
//     price: 29.99,
//     quantity: 1,
//     image: '/images/gray.jpeg?height=80&width=80',
//   },
//   {
//     id: 3,
//     title: 'Product 3',
//     price: 39.99,
//     quantity: 3,
//     image: '/images/black.jpeg?height=80&width=80',
//   },
// ];

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addToCart: (product) => {
          const existingProduct = get().items.find(
            (item) => item.id === product.id
          );
          console.log(existingProduct);

          set({
            items: existingProduct
              ? get().items
              : [
                  ...get().items,
                  {
                    quantity: 1,
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.images[0],
                  },
                ],
          });
          if (existingProduct) {
            toast.error('Product Already exists');
          } else {
            toast.success('Product Added successfully');
          }
        },
        removeFromCart: (id) => { 
          set({
            items: get().items.filter(item => item.id !==id)
          })
          toast.success('Item removed')
        },
        updateQty: (type) => {}
      }),
      { name: 'cart-storage' }
    )
  )
);





// const useCartStore = create<CartState>()(
//   persist(
//     (set, get) => ({
//       removeFromCart: (id) => {
//         set({
//           items: get().items.filter((item) => item.id !== id),
//         });
//         toast.success('Item removed');
//       },
//       updateQty: (type, id) => {
//         const item = get().items.find((item) => item.id === id);
//         if (!item) {
//           return;
//         }
//         if (item.quantity === 1 && type === 'decrement') {
//           get().removeFromCart(id);
//         } else {
//           item.quantity =
//             type === 'decrement' ? item.quantity - 1 : item.quantity + 1;
//           set({
//             items: [...get().items],
//           });
//         }
//       },
//     }),
//     {
//       name: 'cart-storage',
//     }
//   )
// );


export default useCartStore