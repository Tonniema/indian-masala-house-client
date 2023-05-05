import React from 'react';
import { useState , useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import toast from 'react-hot-toast';


const ReceipeDetails = ({receipe}) => {
    console.log(receipe)
    const { Recipe_Of, Recipe_Picture, Recipe_Name, Recipe_Ingredients, Recipe_Cooking, Recipe_Rating, Recipe_ID, Chef_Name, Chef_Picture, Chef_Experience, Chef_Recipes, Chef_Like, Chef_Bio } = receipe;

    const [isRed, setIsRed] = useState(false);

    useEffect(() => {
      const storedColor = localStorage.getItem('profitIconColor');
      if (storedColor) {
        setIsRed(storedColor === 'red');
      }
    }, []);
  
    const handleClick = () => {
      setIsRed(!isRed);
      localStorage.setItem('profitIconColor', !isRed ? 'red' : 'black');
      toast('𝕿𝖍𝖆𝖓𝖐 𝖞𝖔𝖚 𝖋𝖔𝖗 𝖆𝖉𝖉 𝖎𝖙 𝖋𝖆𝖛𝖔𝖚𝖗𝖎𝖙𝖊. 𝖄𝖔𝖚𝖗 𝖉𝖆𝖙𝖆 𝖆𝖉𝖉𝖊𝖉𝖊𝖉 𝖎𝖓𝖙𝖔 𝖑𝖔𝖈𝖆𝖑𝖘𝖙𝖔𝖗𝖆𝖌𝖊 🌸...', {
        duration: 9000,
        position: 'top-center',
      
        // Styling
        style: {color : "black" , backgroundColor : 'pink'},
        className: '',
      
        // Custom Icon
        icon: ' ',
      
      });
    

    };


    return (
        <div className='py-3 px-3'>
            <p className='text-center italic font-[900] text-xs md:text-2xl text-orange-600'>{Recipe_Of}</p>
            <section>
                <div className="card flex-col md:flex-row card-side bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 shadow-lg">
                    <figure><img className='md:w-[700px] w-[292px] md:h-[450px]' src={Recipe_Picture} alt="Recipe Picture is loading... it can takes few minutes.. please wait.." /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{Recipe_Name}</h2>
                        <p>Ingredients: {Recipe_Ingredients}.</p>
                        <p>How to Cooking: {Recipe_Cooking}.</p>
                        <p>Rating: {Recipe_Rating}</p>
                        <div className="card-actions justify-end">
                            <FaHeart onClick={handleClick} color={isRed ? 'red' : 'black'} size={"3em"} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReceipeDetails;