"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

type SliderContent = {
  website: string;
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  link: string;
}[];

export default function Slider({ content }: { content: SliderContent }) {
  return (
    <Swiper
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, FreeMode, Pagination, Navigation]}
      className="mySwiper"
      slidesPerGroup={1}
    >
      {content.map((news, i) => (
        <SwiperSlide key={i}>
          <div
            className="bg-white gap-2 p-6 border border-[#dadfe7] 
          flex flex-col rounded-2xl 
         transition-all duration-300 shadow-sm cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div className="text-xs px-3 py-1 rounded-xl bg-black text-white font-medium">
                {news.website}
              </div>
              <div className="text-sm text-[#627084]">{news.publishedDate}</div>
            </div>

            <div className="text-md md:text-lg font-bold text-black mt-2">
              {news.title}
            </div>

            <div className="text-xs text-[#627084]">{news.description}</div>

            <div className="flex gap-2 flex-wrap mt-3">
              {news.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-[#e7eaef] rounded-md text-black"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
