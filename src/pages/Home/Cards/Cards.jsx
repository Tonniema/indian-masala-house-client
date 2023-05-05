import React, { useEffect, useState } from 'react';
import { FaThumbsUp} from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Cards = ({chef}) => {

    const{Chef_Picture , Chef_ID , Chef_Name , Chef_Experience , Chef_Recipes , Chef_Like , Chef_Bio , Chef_View} = chef;
    
    return (
        <div>
            
             <div className="card bg-gradient-to-r from-neutral-300 via-gray-200 shadow-lg  ">
                <figure className="px-10 pt-10">
                    <LazyLoad>
                    <img  src={Chef_Picture} alt="Chef_Picture" className="rounded-xl h-[12em] md:h-[15em] " />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{Chef_Name}</h2>
                    <p>{Chef_Bio}</p>

                    <hr className='border-2 border-black w-[80%]' />
                    <div className='flex gap-x-[15em] text-xs items-center'>
                        <div className=''>
                            <p>{Chef_Experience} Experienced</p> 
                            <p>{Chef_Recipes} Recipes</p> 
                        </div>

                        <div className='flex gap-x-1'>
                            <FaThumbsUp></FaThumbsUp>
                            <p>{Chef_Like}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to = {`/chef/${Chef_ID}`}><button className=" btn-error py-2 md:py-3 px-4 md:px-6 rounded-lg text-white hover:bg-orange-400">{Chef_View}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;