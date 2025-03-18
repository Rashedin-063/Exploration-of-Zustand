'use client';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/types';
import useCartStore from '@/store/cartStore';

export function ProductCard({ product }: { product: Product }) {
  // const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden pb-4'>
      <div className='flex-1 h-80'>
        <img
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={200}
          className='w-full h-48 object-cover'
        />
        <div className='p-4'>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>
            {product.title}
          </h2>
          <p className='text-gray-600 mb-4'>${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className='px-4'>
        <Button  className='w-full'>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
