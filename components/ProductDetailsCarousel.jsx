import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const listThumb = [
  '/p1.png', '/p2.png', '/p3.png', '/p4.png', '/p5.png', '/p6.png', '/p7.png'
]

const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
      >
        {
          listThumb.map((item, index) => <img key={index} src={item} alt="Product List Thumb" />)
        }
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel