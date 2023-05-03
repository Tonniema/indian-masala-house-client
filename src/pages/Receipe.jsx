import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReceipeDetails from './ReceipeDetails';

const Receipe = () => {

    const receipeData = useLoaderData();
    console.log(receipeData)
    return (
        <div>
            {
               receipeData.map(receipe => <ReceipeDetails
              
                receipe = {receipe}
               ></ReceipeDetails>)
            }
        </div>
    );
};

export default Receipe;