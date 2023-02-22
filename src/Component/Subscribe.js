import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1 className='text-3xl font-extrabold'>Join Our DeFi Community</h1>
        <div className='py-4'>
            <input className='py-3 px-7 rounded-3xl mr-4' type="email" placeholder='Enter your email' />
            <button className='bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl py-3 px-7'>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-2 '>
            <input className='mr-2 ' type="checkbox"/>
            <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
    </div>
    );
};

export default Subscribe;