import React from 'react';
import { useState,useEffect } from 'react';
import BookCards from '../components/BookCards';
const OtherBooks = () => {
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
        <div>
            <BookCards books={books} headline="Other Books" />


        </div>
    )
}

export default OtherBooks