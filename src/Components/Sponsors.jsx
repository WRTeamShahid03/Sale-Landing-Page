import React, { useCallback, useRef } from "react";


import envatoimg from "@/Assets/Images/envato.svg";
import codecanimg from "@/Assets/Images/codecanyon.svg";
import authorimg from "@/Assets/Images/author.svg";
import eliteimg from "@/Assets/Images/elite-author.svg";
import weekimg from "@/Assets/Images/week.svg";
import years from '@/Assets/Images/years.png'
import team from '@/Assets/Images/team.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// import dobleQuotes from '../../src/Asset/Icons/double-quotes-l.svg'

const Sponsors = () => {
  const swiperData = [
    {
      id: 0,
      img: envatoimg,
      text: 'Envato',
    },
    {
      id: 1,
      img: codecanimg,
      text: 'Codecanyon',
    },
    {
      id: 2,
      img: eliteimg,
      text: 'Elite Author',
    },
    {
      id: 3,
      img: authorimg,
      text: 'Exclusive Author',
    },
    {
      id: 4,
      img: weekimg,
      text: 'Week',
    },
    {
      id: 5,
      img: years,
      text: '7+ Years',
    },
    {
      id: 6,
      img: team,
      text: 'Creative Team',
    },
  ]

  const breakpoints = {
    320: {
      slidesPerView: 2,
      // spaceBetween: 40
    },
    375: {
      slidesPerView: 2,
      // spaceBetween: 40
    },
    576: {
      slidesPerView: 2,
      // spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  };


  const sliderRef = useRef(null);
  return (
    <div className="icon-labels-container">
      <Swiper
        ref={sliderRef}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        speed={800}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        loop={true}
        className=""
        breakpoints={breakpoints}
      >
        {swiperData.map((ele, index) => {
          return (
            <SwiperSlide key={ele.id}>
              <div className="icon-label">
                <img src={ele.img.src} alt={ele.text} />
                <span>{ele.text}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper >
    </div >
  );
};

export default Sponsors;

