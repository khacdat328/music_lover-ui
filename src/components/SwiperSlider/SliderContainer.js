import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
// import 'Sw'
import 'swiper/css'
import "swiper/css/pagination"
import SliderItem from "./SliderItem"

// import required modules
import { Autoplay, Pagination } from "swiper"

export default function SliderContainer({ data }) {
	return (
		<div className="pt-8">
			<div className="max-h-[240px]">
				<Swiper
					slidesPerView={3}
					spaceBetween={16}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination]}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
					className="mySwiper">
					{data.map((item) => {
						return (
							<SwiperSlide>
								<SliderItem data={{ item }} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}
