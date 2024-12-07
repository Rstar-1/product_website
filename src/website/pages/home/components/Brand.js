import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css";

const Brand = () => {
  SwiperCore.use([Autoplay]);
  const branddata = [
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_1.svg",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_2.svg",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_3.svg",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_4.svg",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_5.svg",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_6.svg",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_7.svg",
    },
    {
      picture:
        "https://html.themeholy.com/haona/demo/assets/img/brand/brand_1_8.svg",
    },
  ];

  return (
    <div className="ptpx20 pbpx20 bgdark">
      <div className="container mx-auto">
        <Swiper
          grabCursor={true}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1536: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
        >
          {branddata.map((e) => (
            <SwiperSlide>
              <div className="">
                <img
                  src={e.picture}
                  alt="brand-img"
                  className="brand-img object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
