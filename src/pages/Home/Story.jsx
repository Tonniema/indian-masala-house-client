import React from 'react';

const Story = () => {
    return (
        <div className=''>
            <div className="" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/flowers-composition-from-blue-hydrangea-flowers-white-background-spring-summer-template-your_511585-1487.jpg")` }}>
                <div className="flex items-center flex-col-reverse md:flex-row justify-between py-2">
                    <div className='mx-2 '><img src="https://us.123rf.com/450wm/dolgachov/dolgachov1903/dolgachov190302274/119565597-cooking-profession-and-people-concept-happy-male-indian-chef-in-toque-over-grey-background.jpg?ver=6" className=" rounded-lg shadow-2xl w-[100%] " /></div>
                    <div className='text-center md:text-left md:mb-0 mb-2'>
                        <h2 className='text-orange-500 text-4xl'>Our Story</h2>
                        <h1 className="md:text-5xl text-[2em] font-bold">Traditional & Modern<br /> Service <span className='text-orange-500 font-bold'>Since 1970</span></h1>
                        <p className="py-6">“Although the skills aren’t hard to learn, finding the happiness and finding the satisfaction and finding <br></br> fulfillment in continuously serving somebody else something good to eat, is what makes a really good restaurant.” </p>
                        <div className='flex justify-center'><button className="btn btn-error text-white">Our Story</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;