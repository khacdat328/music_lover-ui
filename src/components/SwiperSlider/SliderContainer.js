import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SliderItem from "./SliderItem";

// import required modules
import { Pagination } from "swiper";

export default function SliderContainer({ data }) {
	return (
		<div className="w-auto h-2">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{data.map((item) => {
					<SwiperSlide>
						<SliderItem item={item} />
					</SwiperSlide>;
				})}
			</Swiper>
		</div>
	);
}
