'use client';
import { JSX } from 'react';

const AddToCart = (): JSX.Element => {
  return (
    <button onClick={() => console.log('click')}>
      Add to Cart
    </button>
  );
};
export default AddToCart;
