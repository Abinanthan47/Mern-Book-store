import React from 'react';
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BookCards = ({ headline, books }) => {
    return (
        <div>
            <h2 className='text-5xl  text-center font-normal font-kanit my-5 '>
                {headline}
            </h2>
            <div className='m-5'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >

                    {
                        books.map(book => <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <div className='relative mt-16 ml-5 '>
                                    <img className='rounded-md h-80 w-64' src={book.imageURL} alt='' />
                                    <div className='absolute top-3 right-3 bg-amber-300 hover:bg-[#007D2C]  p-2 rounded '>
                                        <BiCart className='w-4 h-4 text-black hover:text-white' />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='overflow-hidden font-kanit'>{book.bookTitle}</h3>
                                    <p>{book.authorName}</p>
                                </div>
                                <p>$9.99</p>
                            </Link>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default BookCards