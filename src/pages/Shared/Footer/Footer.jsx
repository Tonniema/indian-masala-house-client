import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-slate-600 via-slate-400 to-slate-700'>
  <div className='flex flex-col md:flex-row px-9 pt-10 md:pt-20'>
    <div className='w-full md:w-[300px]'>
      <h2 className='mt-5 font-extrabold text-[1.6em] md:text-4xl text-white'>indian<span className='text-amber-500'>Masala</span>.House</h2>
      <p className='mt-5 font-normal text-base text-white'>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
      <img className='mt-5 pb-12' src="https://i.ibb.co/jZVR5PK/Group-9969.png" alt="" />
    </div>
    <div className='mt-5 md:ml-[100px] grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16'>
      <div className='w-full md:w-[100px]'>
        <h2 className='font-semibold text-3xl text-white'>Company</h2>
        <p className='font-normal text-base text-white'>About Us</p>
        <p className='font-normal text-base text-white'>Work</p>
        <p className='font-normal text-base text-white'>Latest News</p>
        <p className='font-normal text-base text-white'>Careers</p>
      </div>
      <div className='w-full md:w-auto'>
        <h2 className='font-semibold text-3xl text-white'>Product</h2>
        <p className='font-normal text-base text-white'>Prototype</p>
        <p className='font-normal text-base text-white'>Plans & Pricing</p>
        <p className='font-normal text-base text-white'>Customers</p>
        <p className='font-normal text-base text-white'>Integrations</p>
      </div>
      <div className='w-full md:w-auto'>
        <h2 className='font-semibold text-3xl text-white'>Support</h2>
        <p className='font-normal text-base text-white'>Help Desk</p>
        <p className='font-normal text-base text-white'>Sales</p>
        <p className='font-normal text-base text-white'>Become a Partner</p>
        <p className='font-normal text-base text-white'>Developers</p>
      </div>
      <div className='w-full md:w-auto'>
        <h2 className='font-semibold text-3xl text-white'>Contact</h2>
        <p className='font-normal text-base text-white'>524 Broadway, NYC</p>
        <p className='font-normal text-base text-white'>+1 777-978-5570</p>
      </div>
    </div>
  </div>
  <hr className='w-[94%] mx-auto'></hr>
  <div className='footerSection flex justify-between px-4'>
    <p className='pt-10 md:pt-[50px] pb-10 md:pb-[100px] font-semibold text-sm text-white text-center md:text-left'>@2023 CareerHub. All Rights Reserved</p>
    <p className='pt-10 md:pt-[50px] pb-10 md:pb-[100px] font-semibold text-sm text-white text-center md:text-left'>Powered by <span className='font-bold'>Start Carrier</span></p>
  </div>
</div>
    );
};

export default Footer;

// footer added