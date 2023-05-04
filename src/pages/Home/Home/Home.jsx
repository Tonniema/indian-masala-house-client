import React, { useEffect, useState } from 'react';

import Cards from '../Cards/Cards';
import Story from '../Story';
import MarqueeMenu from '../MarqueeMenu';
import Review from '../Review';
import Banner from '../Banner/Banner';


const Home = () => {
  const [chefInfo, setChefInfo] = useState([]);

    useEffect(() =>{
        fetch('https://indian-masala-house-server-tonniemasarker-gmailcom.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefInfo(data))
        .catch(error => console.error(error))
    } , [])
    console.log(chefInfo)
    return (
      <div>
        <Banner></Banner>
        <Story></Story>
        <MarqueeMenu></MarqueeMenu>
        <div>
        
          <h2 className='text-center text-orange-500 text-[1.6em] md:text-4xl py-4'>Amazing Team</h2>
          <h1 className='text-center text-[1.6em] md:text-5xl font-bold pb-6'>Meet Our Chefs</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-3 py-3'>
        {
          chefInfo.map(chef => <Cards
          key={chef.Chef_ID}
          chef = {chef}
          ></Cards>)

        }
        </div>
        <Review></Review>
      </div>
    );
};

export default Home;
// gggg