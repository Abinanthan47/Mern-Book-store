import React from 'react'
import { Link } from 'react-router-dom'

const FavBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <img src='https://storage.googleapis.com/pai-images/bf08cd0a8f7a4edc9f75dc1026e36cde.jpeg' alt='' className=' shadow-md rounded-xl md:w-10/12 flex flex-col md:flex-row justify-between items-center gap-12' />
            </div>
            <div className='md:w-1/2'>
                <h2 className='text-5xl font-kanit my-5 md:w-3/4 leading-snug'>Find your Favorite <span className='text-[#007D2C]'>Books Here</span></h2>
                <p className='mb-10 text-lg md:w-5/6'>Find your all time favorite books here</p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14 '>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listings</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Registered Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-base'>Book Downloads</p>
                    </div>
                </div>
                <Link to="/shop" className='mt-12 block'><button className='bg-[#007D2C] text-white font-kanit px-5 py-2 rounded-md hover:bg-green-700 transition-all duration-300'>
                    Explore more
                </button></Link>
            </div>
        </div>
    )
}

export default FavBook