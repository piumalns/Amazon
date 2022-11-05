import React from 'react'
import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from "next/router"
import { selectItems } from "../slices/basketSlice"
import { useSelector } from 'react-redux'

export default function Header() {

  const selectItem = useSelector(selectItems);

  const router = useRouter();
  return (
    <header>
        {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2" >
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image 
                onClick={()=>router.push('/')}
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
            <div onClick={signIn} className='toRightSide' >
              <p>Hi, Nayana Supun</p>
              <p className='font-extrabold md:text-sm'>Account & Lists</p>
            </div>

            <div className=' toRightSide' >
              <p>Returns</p>
              <p className='font-extrabold md:text-sm'>& Order</p>
            </div >

            <div onClick={()=> router.push('/checkout')} className='toRightSide relative flex items-center'>
              <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-200 text-center rounded-full font-bold text-black'>{selectItem.length}</span>
              <ShoppingCartIcon className='h-10' />
              
              <p className='font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
            </div>
          </div>
        </div>
      
      {/* Bottum nav */}
      <div className='bg-amazon_blue-light space-x-3 p-2 pl-6 text-center text-white text-sm flex items-center'>
        <p className='toRightSide flex items-center'>
          <MenuIcon className='h-6 mr-6'/>
          All</p>
        <p className='toRightSide'>Prime Video</p>
        <p className='toRightSide'>Today's Deal</p>
        <p className='toRightSide hidden sm:inline '>Electronics</p>
        <p className='toRightSide hidden sm:inline'>Amazon Business</p>
        <p className='toRightSide hidden sm:inline'>Food & Grocery</p>
        <p className='toRightSide hidden lg:inline'>Prime</p>
        <p className='toRightSide hidden lg:inline'>Buy Again</p>
        <p className='toRightSide hidden lg:inline'>Shopper toolkit</p>
        <p className='toRightSide hidden lg:inline'>Health and Persanal Care</p>
      </div>
    </header>
  )
}
