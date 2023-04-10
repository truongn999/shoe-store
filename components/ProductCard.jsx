import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <Link href='/product/slug' className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
      <img src="/product-1.webp" alt="product" className='w-full' />
      <div className='p-4 text-black/[.9]'>
        <h2 className='text-lg font-medium'>Product name</h2>
        <div className='flex items-center text-black/[.5]'>
          <p className='mr-2 text-lg font-semibold'>$21.00</p>
          <p className='text-base font-medium line-through'>$21.00</p>
          <p className='ml-auto text-base font-medium text-green-500'>5% off</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard