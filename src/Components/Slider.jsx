"use client";
import img1 from '../../assets/fire.png'
import img2 from '../../assets/html.png'
import img3 from '../../assets/js.png'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./Style.css";

// Import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

export default function Slider() {
  return (
    <div className='h-[600px] mt-80 relative'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <Image 
            src={img1}
            alt="Slide 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image 
                      src={img2}
                      // Another valid Unsplash image URL
            alt="Slide 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image 
                        src={img3}
                        // Another valid Unsplash image URL
            alt="Slide 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
