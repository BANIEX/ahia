import CheckoutContent from '@/components/CheckoutContent/CheckoutContent';
import Copyright from '@/components/Copyright/Copyright';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="side-space">
        <CheckoutContent />
      </div>
      <Footer />
      <Copyright/>
    </div>
  );
}

export default page