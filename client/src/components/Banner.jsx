import React from 'react';
import { FiSearch } from "react-icons/fi";

import bookpic from '../assets/hero1.png';

const Banner = () => {
    return (
        <div className='px-4 lg:px-24  mt-5 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                <div>
                    <h2 className=' text-6xl  font-kanit font-normal'>Find the book <br />you're looking for<br />easier to read.</h2>
                    <p className='mt-3 '>Not sure What to read Next ? Explore our Catalog of books</p>
                    <div className='relative mt-10 p-2 justify-center '>
                        <input type="search" name='search' id='search' placeholder='search a book' className='py-3 px-20 rounded-full   border-2 shadow-xl ' />
                        <button className=' bg-[#007D2C] p-2 rounded-full absolute mt-2 left-[307px]'><FiSearch className='text-white ' /></button>
                    </div>
                </div>
                <div>
                    <img src={bookpic} alt='hero' className='  h-[550px] w-full' />
                </div>
            </div>
        </div>
    )
}

export default Banner