import React from 'react';
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
                        <button className="btn btn-error text-white"><Link to='/'>Home</Link></button>
                    </div>
                </div>
            </div>
            <div className='text-center '>
                <h2 className='text-[1.6em] md:text-3xl my-4' >About Us</h2>
                <h1 className='text-[1.6em] md:text-5xl pb-4'>Traditional & Modern Service <br />Since <span className='text-orange-500 font-bold'>1970</span></h1>
            </div>
            <div className='flex justify-between pb-3'>
                <p>
                    Cras aliquet dolor sit amet, consectetur adipiscing elit. Placerat pellent esque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet.
                </p>
                <p>
                    Aenean pellentesque laoreet neque, vitae aliquet nibh iaculis at pellent esque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet.
                </p>
            </div>


        </div>
    );
};

export default About;

