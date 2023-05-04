import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReceipeDetails from './ReceipeDetails';
import { Toaster } from 'react-hot-toast';
import { FaThumbsUp} from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const Receipe = () => {

    const receipeData = useLoaderData();
    console.log(receipeData)
    return (
        <div>
            <section className='bg-[url("https://img.freepik.com/free-vector/abstract-watercolor-background_23-2148825783.jpg?w=360")] bg-no-repeat bg-cover  w-[70%] mx-auto mt-2 border-double rounded-lg border-4 border-yellow-700'>
                
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <div className='flex justify-center'>
                                <LazyLoad>
                                <img className='h-[250px]' src={receipeData[0].Chef_Picture} alt="" />
                                </LazyLoad>
                            </div>
                            <h1 className="text-5xl font-bold pt-2">{receipeData[0].Chef_Name}</h1>
                            <p className="py-3">{receipeData[0].Chef_Bio}.</p>
                            <div className='flex gap-x-[22em] text-xs items-center'>
                                <div className=''>
                                    <p>{receipeData[0].Chef_Experience} Experienced</p>
                                    <p>{receipeData[0].Chef_Recipes} Recipes</p>
                                </div>

                                <div className='flex gap-x-1'>
                                    <FaThumbsUp></FaThumbsUp>
                                    <p>{receipeData[0].Chef_Like}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
               receipeData.map(receipe => <ReceipeDetails
              
                receipe = {receipe}
               ></ReceipeDetails>)
            }
            <Toaster></Toaster>
        </div>
    );
};

export default Receipe;