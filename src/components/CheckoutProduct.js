import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({item}) {
  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () =>{
      dispatch(addToBasket(item))
  }

  const removeFrmBasket = () =>{
    dispatch(removeFromBasket(item.id))
  }

  return (
    <div className='grid grid-cols-5'>
      <Image src={item?.image} height={200} width={200}/>
      <div className='col-span-3 mx-5'>
        <p>{item.title}</p>
        <div>
          {Array(item.rating).fill()
          .map((_,i) => (
            <StarIcon key={i} className='h-5 text-yellow-500'/>
          ))}
        </div>
        <div className='text-xs my-2 line-clamp-3'>
          {item.description}
        </div>
        <div className='space-y-2'>
          <Currency quantity={item?.price} currency='LKR' />
        </div>
        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-1'>
                <img className='w-10' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
            </div>
        )}
      </div>

      <div className='flex flex-col space-y-2 justify-self-end'>
        <button className='buttonClass' onClick={addItemToBasket}>Add to basket</button>
        <button className='buttonClass' onClick={removeFrmBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct