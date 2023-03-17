import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
// import 'Sw'
import "swiper/css"
import "swiper/css/pagination"
import SliderItem from "./SliderItem"

// import required modules
import { Autoplay, Pagination } from "swiper"
import { logDOM } from "@testing-library/react"

export default function SliderContainer({ data }) {
	return (
		<div className="pt-8">
			<Swiper
				loop
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				className="mySwiper">
				{data.map((item, index) => {
					console.log({ item })
					return (
						<SwiperSlide key={index}>
							<SliderItem data={{ item }} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
