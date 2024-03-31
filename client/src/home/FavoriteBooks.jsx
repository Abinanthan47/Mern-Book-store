import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';
// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/all-books")
            .then(res => res.json())
            .then(data => {
                // Check if the response contains a nested bookobj property
                const filteredBooks = data.map(item => item.bookobj ? item.bookobj : item);
                setBooks(filteredBooks.slice(0, 8));
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);
    return (
        <div className=''>
            <BookCards className='mb-16' books={books} headline="Best Seller Books" />


        </div>
    )
}

export default BestSellerBooks