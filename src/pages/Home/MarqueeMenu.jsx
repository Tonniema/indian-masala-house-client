import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeMenu = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-orange-500 text-[1.6em] md:text-4xl py-4'>Weekly Specials</h2>
                <h1 className='text-[1.6em] md:text-5xl font-bold pb-6'>Menu Of The Day</h1>
            </div>
            <div className=' bg-[url("https://c8.alamy.com/comp/2H11JEP/abstract-neutral-background-white-geometric-mosaic-smooth-triangular-wallpaper-minimal-website-backdrop-elegant-light-template-vector-2H11JEP.jpg")] '>
        <Marquee speed={80} pauseOnClick>
          <div >
            <img className='md:w-[60%] w-[30%]' src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg" alt="" />
          </div>
          <div >
            <img className='md:w-[60%] w-[30%]' src="https://149366112.v2.pressablecdn.com/wp-content/uploads/2014/03/Khaman-Dhokla.jpg" alt="" />
          </div>
          <div >
            <img className='md:w-[60%] w-[30%]' src="https://img.freepik.com/free-photo/eastern-sweets-turkish-delight-lokum-with-nuts-top-view_114579-8401.jpg?w=1060&t=st=1683137818~exp=1683138418~hmac=257f836c2eefddcddb8d42c439a14c6fe6d1e46ed26c65aff7a1e66925a93b95" alt="" />
          </div>
          

        </Marquee>
        </div>
        </div>
    );
};

export default MarqueeMenu;