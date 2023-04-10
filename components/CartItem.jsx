import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      <div className='shrink-0 aspect-square w-[50px] md:w-[100px]'>
        <img src="/product-1.webp" alt="product name" />
      </div>

      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* PRODUCT TITLE */}
          <div className='text-lg md:text-2xl font-semibold text-black/[.8]'>Jordan Retro G 6</div>
          {/* PRODUCT SUBTITLE MOBILE */}
          <div className='text-sm md:text-md font-medium text-black/[.5] block md:hidden'>Men's Golf Shoes</div>
          {/* PRODUCT PRICE */}
          <div className='text-sm md:text-md font-bold text-black/[.5] mt-2'>$ 20.00</div>
        </div>
          {/* PRODUCT SUBTITLE DESKTOP */}
        <div className='text-md font-medium text-black/[.5] hidden md:block'>Men's Golf Shoes</div>

        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2 md:gap-10 text-black/[.5] text-sm md:text-md'>
            <div className='flex items-center gap-1'>
              <div className='font-semibold'>Size:</div>
              <select className='hover:text-black'>
                <option value="1">UK 6</option>
                <option value="1">UK 7</option>
                <option value="1">UK 8</option>
              </select>
            </div>
            <div className='flex items-center gap-1'>
              <div className='font-semibold'>Quantity:</div>
              <select className='hover:text-black'>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className='cursor-pointer text-black/[.5] hover:text-black text-[16px] md:text-[20px]' />
        </div>
      </div>
    </div>
  )
}

export default CartItem