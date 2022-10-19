import React from 'react'
import Image from 'next/image'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header>
        {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2" >
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image 
                src='https://links.papareact.com/f90'
                width={150}
                height={40}
                objectFit='contain'
                className='cursor-pointer'
            />
        </div>
        {/* search bar */}
        <div className='hidden sm:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500'>
          <input  className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
          <SearchIcon className='h-12 p-4' />
        </div>

        {/* right side */}
          <div className='text-white flex items-center mx-6 text-xs space-x-6 whitespace-nowrap'>
            <div className='toRightSide' >
              <p>Hi, Nayana Supun</p>
              <p className='font-extrabold md:text-sm'>Account & Lists</p>
            </div>

            <div className=' toRightSide' >
              <p>Returns</p>
              <p className='font-extrabold md:text-sm'>& Order</p>
            </div >

            <div className='toRightSide relative flex items-center'>
              <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-200 text-center rounded-full font-bold text-black'>0</span>
              <ShoppingCartIcon className='h-10' />
              
              <p className='font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
            </div>
          </div>
        </div>
      
      {/* Bottum nav */}
      <div>

      </div>
    </header>
  )
}
