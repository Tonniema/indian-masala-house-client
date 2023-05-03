import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import Cards from '../Cards/Cards';

const Home = () => {
  const [chefInfo, setChefInfo] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefInfo(data))
        .catch(error => console.error(error))
    } , [])
    console.log(chefInfo)
    return (
      <div>
        <Banner></Banner>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-3 py-3'>
        {
          chefInfo.map(chef => <Cards
          key={chef.Chef_ID}
          chef = {chef}
          ></Cards>)

        }
        </div>

      </div>
    );
};

export default Home;