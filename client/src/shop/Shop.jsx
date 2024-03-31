import { Card } from "flowbite-react";
import { useEffect, useState } from 'react';

const Shop = () => {
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
    <div className='mt-28 px-3 lg:px24'>
      <h2 className='text-5xl font-kanit text-center'>All Books are here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-3 grid-cols-1">
        {
          books.map(book => <Card href="#" className="max-w-sm">
            <img src={book.imageURL} alt="" className="h-72 w-86 px-4 justify-center" />
            <h5 className="text-2xl font-kanit tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className="bg-amber-400 text-black font-kanit py-2 rounded-lg">Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop