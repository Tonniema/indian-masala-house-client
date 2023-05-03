import React from 'react';

const Banner = () => {
    return (
        <section>
      <div className="carousel w-[80%] mx-auto pt-3">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://nomadparadise.com/wp-content/uploads/2022/07/indian-foods-14.jpg" className="w-[100%] h-[65%]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn -mt-[13.5em] btn-circle">❮</a>
            <a href="#slide2" className="btn -mt-[13.5em] btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg" className="w-[100%] h-[65%]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn -mt-[13.5em] btn-circle">❮</a>
            <a href="#slide3" className="btn -mt-[13.5em] btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Dosa.jpg" className="w-[100%] h-[65%]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn -mt-[13.5em] btn-circle">❮</a>
            <a href="#slide4" className="btn -mt-[13.5em] btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg" className="w-[100%] h-[65%]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn -mt-[13.5em] btn-circle">❮</a>
            <a href="#slide1" className="btn -mt-[13.5em] btn-circle">❯</a>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;