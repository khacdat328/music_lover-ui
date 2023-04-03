import React, { useRef, useState } from "react";
// Import Swiper React components
import { EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SliderItem from "./SliderItem";

// import required modules
import { Autoplay } from "swiper";

export default function SliderContainer({ data }) {
	return (
		<div className="pt-8 -mx-3.5">
			<Swiper
				loop={true}
				slidesPerView={3}
				spaceBetween={30}
				effect={"creative"}
				creativeEffect={{
					limitProgress: 2,
					prev: {
						translate: ["70%", 0, -900],
					},
					next: {
						translate: ["100%", 0, 0],
					},
				}}
				modules={[Autoplay, EffectCreative]}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				className="mySwiper"
			>
				{data.map((item, index) => {
					return (
						<SwiperSlide key={index} className="px-[15px]">
							<SliderItem data={{ item }} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
