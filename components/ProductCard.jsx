import { getDiscountFromPrice } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ data: {attributes: product, id} }) => {
  return (
    <Link href={`/product/${product.slug}`} className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
      <Image
        width={500}
        height={500}
        src={product.thumbnail.data.attributes.url}
        alt={product.name}
      />
      <div className='p-4 text-black/[.9]'>
        <h2 className='text-lg font-medium'>{product.name}</h2>
        <div className='flex items-center text-black/[.5]'>
          <p className='mr-2 text-lg font-semibold'>&#8377;{product.price}</p>
          {product.original_price && (
            <>
              <p className='text-base font-medium line-through'>{product.original_price}</p>
              <p className='ml-auto text-base font-medium text-green-500'>{getDiscountFromPrice(product.original_price, product.price)}% off</p>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard