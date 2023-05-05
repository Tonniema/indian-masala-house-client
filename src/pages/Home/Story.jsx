import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const storyImg = 'https://us.123rf.com/450wm/dolgachov/dolgachov1903/dolgachov190302274/119565597-cooking-profession-and-people-concept-happy-male-indian-chef-in-toque-over-grey-background.jpg?ver=6';
const Story = () => {
    return (
        <div className=''>
            <div className="" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/flowers-composition-from-blue-hydrangea-flowers-white-background-spring-summer-template-your_511585-1487.jpg")` }}>
                <div className="flex items-center flex-col-reverse md:flex-row justify-between py-4">
                    <div className='mx-2 '>
                        
                        {/* image magnify used */}

                    <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: storyImg,
                                width:500,
                            },
                            largeImage: {
                                src:storyImg,
                                width: 1200,
                                height: 1200
                            }
                        }} /> 
                        
                        </div>
                    <div className='text-center md:text-left md:mb-0 mb-2'>
                        <h2 className='text-orange-500 md:text-4xl text-[2em]'>Explore Our Story with <span className='text-black font-bold'>Image Magnify</span></h2>
                        <p className="py-6">“Although the skills aren’t hard to learn, finding the happiness and finding the satisfaction and finding <br></br> fulfillment in continuously serving somebody else something good to eat, is what makes a really good restaurant.” </p>
                        <div className='flex justify-center'><button className=" btn-error py-2 md:py-3 px-4 md:px-6 rounded-lg text-white hover:bg-orange-400">Our Story</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;