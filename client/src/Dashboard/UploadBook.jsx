import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import React, { useState } from 'react';

const UploadBook = () => {
  const bookCategories = [
    "Action & Adventure",
    "Biography & Memoir",
    "Fiction",
    "Non-Fiction",
    "Finance",
    "Productivity",
    "Fantasy",
    "Horror",
    "Programming",
    "Science Fiction",
    "Self Help",
    "Urban Fantasy",
    "Western",
    "Travel",
    "History",
    "Cooking",
    "Children",
    "Art & Design"
  ];

  const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);

  const handleChangeValue = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = selectedCategory; // Use selectedCategory state instead of form value
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookobj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    };

    fetch("http://localhost:3000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ bookobj }),
    })
      .then(res => res.json())
      .then(data => {
        alert('Your Book has been added!');
        form.reset();
      })
      .catch(error => console.error("Error uploading book:", error));
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-kanit'>Upload a Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author name" required />
          </div>
        </div>
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Book image URL" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id="inputState" name="categoryName" className="w-full rounded " value={selectedCategory} onChange={handleChangeValue}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Description of your book" className="w-full" required rows={5} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="paste your book pdf url" required />
        </div>
        <Button type="submit" className="mt-5">Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
