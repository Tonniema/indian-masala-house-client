import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://st3.depositphotos.com/3300441/14591/i/450/depositphotos_145917937-stock-photo-assorted-indian-food.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-[2.5em] md:text-5xl font-bold">About Us</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className=" btn-error py-2 md:py-3 px-4 md:px-6 rounded-lg text-white hover:bg-orange-400"><Link to='/'>Home</Link></button>
                    </div>
                </div>
            </div>

            <div className='bg-[url("https://images.squarespace-cdn.com/content/v1/5fb43dd79d63ac327876d9d8/1659831123917-19QRZSXLHRBUNQMKJ021/top+view+of+flowers.jpg?format=2500w")]' >
                <div className='text-center pt-8'>
                    <h1 className='text-[1.6em] md:text-5xl pb-4'>Traditional & Modern Service <br />Since <span className='text-orange-500 font-bold'>1970</span></h1>
                </div>
                <div className='flex gap-3 m-3 flex-col md:flex-row md:justify-evenly py-4'>

                    <div className="card  hover:bg-gradient-to-r from-[#bcbaa9] to-[#e69f98]  shadow-xl ">
                        <figure><LazyLoad><img className='w-[100%]  ' src="https://www.mohren-bodensee.de/images/alle-abteilungen/Mohren/1440x700/candlelight.jpg" alt="Shoes" /></LazyLoad></figure>
                        <div className="card-body text-center">
                            
                            <p className='pt-6'>Lively atmosphere with nice Indian music playing on a decent sound system. Nice staff and good service. Food was good and freshly prepared. Samosas had way too much chili flakes. I like them with spice but not loads of chili flakes. Tandori chicken was tasty though hotter in terms of spice than I am used too. I recommend trying this place especially if you like hot and spicy food.</p>
                           
                        </div>
                    </div>
                    <div className="card  hover:bg-gradient-to-r from-[#bcbaa9] to-[#e69f98] shadow-xl ">
                        <figure><LazyLoad><img className='w-[500px] h-[235px]' src="https://www.offbeat.com/wp-content/uploads/2022/12/Jan-23-Mamou-interior-2-1024x683.jpg" alt="Shoes" /></LazyLoad></figure>
                        <div className="card-body text-center">
                            
                            <p className='pt-6'>Excellent quality and ambiance. Indian food in Princeton varies a lot and it's difficult to find a consistent experience, even at one restaurant. I hesitate to give a huge, glowing review based on one visit, but if the second visit is anything like the first, I'll go to 5 stars. I had the Cashmere Chicken and my bf had the Chicken Vindaloo and it was all extremely tasty. Pleasant, attentive staff. Loved it!</p>
                            
                        </div>
                    </div>
                    <div className="card  hover:bg-gradient-to-r from-[#bcbaa9] to-[#e69f98] shadow-xl">
                        <figure><LazyLoad><img className='w-[500px] h-[235px] ' src="https://images.firsttable.net/1200x630/public/Uploads/7dcc33c182/iStock-36520954-MEDIUM.jpg" alt="Shoes" /></LazyLoad></figure>
                        <div className="card-body text-center">

                            <p className='pt-6'>What’s our purpose at indian<span className='text-amber-500'>Masala</span>.House? Moments of Excitement. All made possible by our flavor, innovation and, most importantly, by unlocking potential in our team members.<br/>

                                With more than 50 years of experience under our belts, we understand how to best serve our customers through tried and true service principles. Instead of following trends, we set them. We create food we’re proud to serve and deliver it fast, with a smile. No matter where you find us, we’re making sure each meal our customers enjoy is delicious and one-of-a-kind.</p>
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;

