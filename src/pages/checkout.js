import React from 'react'
import Header from '../components/Header';
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import { session } from 'next-auth/client';
import Currency from "react-currency-formatter";

function Checkout() {

  const items = useSelector(selectItems)
  const total = useSelector(selectTotal);
  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-xl mx-auto'>
        {/* left side */}
        <div className='flex-grow'>
            <Image 
                src="https://links.papareact.com/ikj" 
                height={250} 
                width={1020} 
                objectFit='contain' 
            />
        </div>
        <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-2 pb--4'>
              {items.length === 0 
              ? "Your Shopping Backet is empty"
              : "Your Shopping Backet"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct key={i} item={item} />
            ))}
        </div>
        {/* right side */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
           {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>Subtotal {items.length} items : 
                <span className='font-bold'> 
                <Currency quantity={total} currency='LKR' />
                </span>
              </h2>
              <button disabled={!session}
                className={`button mt-2 ${!session && 'from-gray-100 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                {!session ? 'Sign in to checkout' : 'Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
