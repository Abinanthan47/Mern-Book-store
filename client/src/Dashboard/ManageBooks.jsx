import { Table } from "flowbite-react";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/book/${id}`,{
      method:"DELETE",

    }).then(res => res.json()).then(data => {alert("Your Book is Deleted Successfully") ;
  })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-kanit'>Manage your Books</h2>
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.Row className="bg-gray-200 dark:bg-gray-800">
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Edit or Manage</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {allBooks.map((book, index) => (
            <Table.Row key={book._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 dark:bg-gray-700'}>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$9.99</Table.Cell>
              <Table.Cell>
                <Link className="text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-books/${book._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className="bg-red-500 text-white px-4 py-1 rounded-md  hover:bg-red-700 font-sans">Delete</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageBooks;
