import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import heroimg1 from "../assets/heroimg1.png";
import heroimg2 from "../assets/heroimg2.png";
import heroimg3 from "../assets/heroimg3.png";
import heroimg4 from "../assets/heroimg4.png";

const Hero = () => {
    return (
        <div className='w-11/12 mx-auto'>
             <Swiper
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination = {{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

    >
      <SwiperSlide>
        <div>
            <img className='h-[350px] w-full mx-auto rounded-lg my-5' src={heroimg2} alt="" />
            <p className='w-[700px] mx-auto pb-6'>Agriculture indisputably holds a central place in maintaining global food security, being the main source of nutritional provisions for populations. With urban farming, residents in the city maximize their limited space by planting their food.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
             <img className='h-[350px] w-full mx-auto rounded-lg my-5' src={heroimg1} alt="" />
            <p className='w-[700px] mx-auto pb-6'>Farming in a sustainable way is essential for long-lasting food security. This approach incorporates techniques that respect ecological balance, are economically feasible, and uphold social justice.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
             <img className='h-[350px] w-full mx-auto rounded-lg my-5' src={heroimg3} alt="" />
            <p className='w-[700px] mx-auto pb-6'>
                Directly, agriculture supports employment for millions in rural areas, stimulating local economies.Evolving agriculture necessitates constant research to improve existing practices and create new technology. 
 
            </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
             <img className='h-[350px] w-full mx-auto rounded-lg my-5' src={heroimg4} alt="" />
            <p className='w-[700px] mx-auto pb-6'>
                Agriculture's role also encompasses biodiversity support. It manifests primarily through crop variance. By cultivating diverse crops, farmers create unique ecosystems that harbor a range of organisms.
            </p>
        </div>


      </SwiperSlide>
        
    </Swiper>
        </div>
    );
};

export default Hero;