import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Autoplay, EffectCoverflow,  Navigation} from 'swiper/modules';


export  function Slider() {
  return (
    <>
      <div className='flex flex-col justify-center items-center '>

         <div className='flex flex-col gap-[40px]   justify-center items-center m-[40px]'>

        

         <Swiper
         className=' flex rounded-[40px] overflow-hidden w-[1200px] items-center'
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop= {true}

         autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}


         slidesPerView= {4}
         coverflowEffect= {{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2.5,
          slideShadows: true,
        }

         }
         navigation={true}
         modules={[Autoplay, EffectCoverflow, Navigation]}
         
         > 
           
           <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-[40px] overflow-hidden'>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      

         </Swiper>

         </div>


      </div>
      
    </>
  )
}

