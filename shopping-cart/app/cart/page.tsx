'use client';
import { Button } from '@/components/ui/button';
import useCartStore from '@/store/cartStore';
import { useEffect } from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// const items: CartItem = [
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



export default function Cart() {
  // const { items, removeFromCart, updateQty } = useCartStore((state) => state);
  // const { } = useCartStore((state) => state);
  const { items, removeFromCart, updateQty } = useCartStore((state) => state)

  
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className='min-h-screen bg-gray-100'>
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Your Cart({items.reduce((sum, i) => sum + i.quantity, 0)})
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='md:col-span-2'>
            {items.map((item) => (
              <div
                key={item.id}
                className='flex items-center bg-white p-4 mb-4 rounded-lg shadow'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className='rounded-md mr-4'
                />
                <div className='flex-grow'>
                  <h2 className='text-lg font-semibold text-gray-800'>
                    {item.title}
                  </h2>
                  <p className='text-gray-600'>${item.price.toFixed(2)}</p>
                  <div className='flex items-center mt-2'>
                    <Button
                      onClick={() => updateQty('decrement', item.id)}
                      // onClick={() => updateQty('decrement', item.id)}
                      variant='outline'
                      size='sm'
                    >
                      -
                    </Button>
                    <span className='mx-2'>{item.quantity}</span>
                    <Button
                      onClick={() => updateQty('increment', item.id)}
                      // onClick={() => updateQty('increment', item.id)}
                      variant='outline'
                      size='sm'
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  // onClick={() => removeFromCart(item.id)}
                  variant='destructive'
                  size='sm'
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <div className='md:col-span-1'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                Order Summary
              </h2>
              <div className='flex justify-between mb-2'>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between mb-2'>
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className='flex justify-between font-semibold text-lg mt-4 pt-4 border-t'>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className='w-full mt-6'>Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
