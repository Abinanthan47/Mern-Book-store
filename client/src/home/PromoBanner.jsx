import React from 'react'
import { Link } from 'react-router-dom'
import bookpic from '../assets/books.png'

const PromoBanner = () => {
    return (
        <div className='mt-16 py-12 bg-[#007D2C] rounded-xl m-1 px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-1/2 '>
                    <h2 className='text-4xl font-kanit text-white mb-6 leading-snug'>2024 National Book Awards for Fiction Shortlist</h2>
                    <Link to="/shop" className=' block'><button className='bg-white text-black font-kanit px-5 py-2 rounded-md hover:bg-gray-300 transition-all duration-300'>
                        Get promo code
                    </button></Link>
                </div>
                <div>
                    <img src={bookpic} alt='' className='w-[250px]' />
                </div>
            </div>
        </div>
    )
}

export default PromoBanner