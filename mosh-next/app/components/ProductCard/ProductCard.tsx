import { JSX } from 'react';
import AddToCart from '@/app/components/AddToCart/AddToCart';

const ProductCard = (): JSX.Element => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
      <p>Card</p>
      <AddToCart />
    </div>
  );
};
export default ProductCard;
