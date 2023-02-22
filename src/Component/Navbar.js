import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav,setNav]=useState(false);

    const handleNav=()=>{
        setNav(!nav)
    }

    return (
        <div className='w-full h-[90px] bg-black'>
           <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
                <div className="text-[#00d8ff] text-3xl font-extrabold">DEFI
                </div>
                <div className="hidden md:flex">
                   <ul className='flex text-white items-center'>
                        <li className='px-4'>Platform</li>
                        <li className='px-4'>Developers</li>
                        <li className='px-4'>Community</li>
                        <li className='px-4'>About</li>
                    <button className='bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl py-3 px-7 ml-4'>Use Defi</button>
                    </ul> 
                </div>
                <div onClick={handleNav} className="block md:hidden text-white">
                    {!nav? <AiOutlineMenu size={30}/>:<AiOutlineClose size={30}/>}
                </div>
                <div className={nav? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                    <ul>
                    <li className='p-4 text-2xl'>Platform</li>
                        <li className='p-4 text-2xl'>Developers</li>
                        <li className='p-4 text-2xl'>Community</li>
                        <li className='p-4 text-2xl'>About</li>
                        <button className='bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl py-3 px-8 m-8'>Use Defi</button>
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default Navbar;