import CartContent from '@/components/CartContent/CartContent';
import Copyright from '@/components/Copyright/Copyright';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ProductSuggestion from '@/components/ProductSuggestion/ProductSuggestion';
import React from 'react'

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <div className="side-space">
        <CartContent />
        <ProductSuggestion />
      </div>
      <Footer />
      <Copyright /> 
    </div>
  );
}

export default Cart