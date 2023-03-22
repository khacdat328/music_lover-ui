import React, { useRef, useState } from "react";
// Import Swiper React components
import { EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ArtistListItem from "./ArtistListItem";

export default function ListContainer({ data }) {
	return (
		<div className="pt-8">
			<Swiper
				loop={true}
				slidesPerView={7}
				spaceBetween={30}
				modules={[]}
				className="mySwiper"
			>
				{data.map((item, index) => {
					return (
						<SwiperSlide key={index} className="">
							<ArtistListItem data={{ item }} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
