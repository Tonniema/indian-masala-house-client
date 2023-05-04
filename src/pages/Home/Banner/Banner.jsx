// import React from 'react';

// const Banner = () => {
//     return (
//         <section className='bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200'>
//       <div className="carousel w-[80%] mx-auto pt-3">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img src="https://nomadparadise.com/wp-content/uploads/2022/07/indian-foods-14.jpg" className="w-[100%] h-[65%]" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn -mt-[13.5em] btn-circle">❮</a>
//             <a href="#slide2" className="btn -mt-[13.5em] btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide2" className="carousel-item relative w-full">
//           <img src="https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg" className="w-[100%] h-[65%]" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn -mt-[13.5em] btn-circle">❮</a>
//             <a href="#slide3" className="btn -mt-[13.5em] btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <img src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Dosa.jpg" className="w-[100%] h-[65%]" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn -mt-[13.5em] btn-circle">❮</a>
//             <a href="#slide4" className="btn -mt-[13.5em] btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full">
//           <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg" className="w-[100%] h-[65%]" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className="btn -mt-[13.5em] btn-circle">❮</a>
//             <a href="#slide1" className="btn -mt-[13.5em] btn-circle">❯</a>
//           </div>
//         </div>
//       </div>
//     </section>
//     );
// };

import React, { useRef } from 'react';
import slider1 from "../../../assets/img/img1.jpg";
import slider2 from "../../../assets/img/img2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

const Banner = () => {
	const carouselRef = useRef(null);
	return (
		<div>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="swiper-slide relative">
						<img
							style={{
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
							src={slider1}
							className="w-[100%] bg-cover opacity-50 h-[850px]"
							alt="Slide1"
						/>
						<div className="absolute top-[400px] left-96">
							<h1 className="w-[70%] font-extrabold text-5xl text-center">
								Welcome to <br />{" "}
								<span className="text-red-600">
									{" "}
									indian<span className='text-amber-500'>Masala</span>.<span className='text-stone-500'>House</span>
								</span>
							</h1>
							<p className="w-[70%] text-lg pt-2 text-center">
								Mediterranean cuisine is the culinary style and
								cuisine of the Mediterranean region,
								characterized by its diversity, freshness, and
								healthiness.
							</p>
							<Link className="mr-72 mt-6" to="">
								<button
									type="button"
									className="mt-6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
									View Recipe
								</button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide relative">
						<img
							style={{
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
							src={slider2}
							className="w-[100%] bg-cover opacity-50 h-[850px]"
							alt="Slide1"
						/>
						<div className="absolute top-[400px] left-96">
						<h1 className="w-[70%] font-extrabold text-5xl text-center">
								Welcome to <br />{" "}
								<span className="text-red-600">
									{" "}
									indian<span className='text-amber-500'>Masala</span>.<span className='text-stone-500'>House</span>
								</span>
							</h1>
							<p className="w-[70%] text-lg pt-2 text-center">
								Mediterranean cuisine is the culinary style and
								cuisine of the Mediterranean region,
								characterized by its diversity, freshness, and
								healthiness.
							</p>
							<Link className="mr-72" to="">
								<button  
									type="button"
									className="mt-6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
									View Recipe
								</button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;