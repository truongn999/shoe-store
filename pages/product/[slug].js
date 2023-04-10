import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import Wrapper from '@/components/Wrapper'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDetails = () => {
  return (
    <div className='w-full md:my-20'>
        <Wrapper>
          <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
            {/* left col start */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
              <ProductDetailsCarousel />
            </div>
            {/* left col end */}

            {/* right col start */}
            <div className='flex-[1] py-3'>
              <div className='text-[34px] font-semibold mb-2'>Jordan Retro 6 G</div>
              <div className='text-lg font-semibold mb-5'>Men&apos;s Golf Shoes</div>
              <div className='text-lg font-semibold'>MRP: $19.00</div>
              <div className='text-md font-semibold text-black/[.5]'>incl. of texas</div>
              <div className='text-md font-semibold text-black/[.5] mb-20'>{`(Also includes all applicable duties)`}</div>

              <div className='mb-10'>
                <div className='flex justify-between mb-2'>
                  <div className='text-md font-semibold'>
                    Select size
                  </div>
                  <div className='text-md font-medium text-black/[.5]'>
                    Select guide
                  </div>
                </div>
                {/* HEADING END */}
                {/* SIZE START */}
                <div className='grid grid-cols-3 gap-2'>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 6</div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 7</div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 8</div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 9</div>
                  <div className='border rounded-md text-center py-3 font-medium bg-black/[.1] opacity-50 cursor-not-allowed'>UK 10</div>
                </div>
                {/* SIZE END */}

                {/* SHOW ERROR START */}
                <div className='text-red-600 mt-1'>
                  Size selection is required
                </div>
                {/* SHOW ERROR END */}
              </div>
              {/* ADD TO CART BUTTON START */}
              <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>Add to Cart</button>
              {/* ADD TO CART BUTTON END */}

              {/* WISHLIST BUTTON START */}
              <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* WISHLIST BUTTON END */}

              <div>
                <div className='text-lg font-bold mb-5'>
                  Product Details
                </div>
                <div className='text-md mb-5'>
                  Lorem Ipsum is Lorem Ipsum and it is Lorem Ipsum. Lorem Ipsum Ipsum
                </div>
              </div>
            </div>
            {/* right col end */}
          </div>
          <RelatedProducts />
        </Wrapper>
    </div>
  )
}

export default ProductDetails