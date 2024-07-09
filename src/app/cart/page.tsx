import CartContent from '@/components/CartContent/CartContent';
import Copyright from '@/components/Copyright/Copyright';
import Footer from '@/components/Footer/Footer';
import ProductSuggestion from '@/components/ProductSuggestion/ProductSuggestion';
import React from 'react'

const Cart = () => {
  return (
    <div>
      <div className="cart">
        <CartContent/>
        <ProductSuggestion/>
        <Footer/>
        <Copyright/>
      </div>
    </div>
  );
}

export default Cart