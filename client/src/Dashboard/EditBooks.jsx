import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();
 
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = selectedCategory; // Use selectedCategory state instead of form value
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatebookobj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    };
fetch(`http://localhost:3000/book/${id}`,{
  method:"PATCH",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(updatebookobj)
}).then(res=>res.json()).then(data=>{
  alert("Book Updated Successfully")
  
})
    
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-kanit'>Update the Book </h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" required defaultValue={bookTitle} />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author name" required defaultValue={authorName} />
          </div>
        </div>
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image" />
            </div>
            <TextInput id="imageURL"  name="imageURL" type="text" placeholder="Book image URL" required defaultValue={imageURL} />
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
          <Textarea id="bookDescription" name="bookDescription" placeholder="Description of your book" className="w-full" required rows={5} defaultValue={bookDescription} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="paste your book pdf url" required defaultValue={bookPDFURL} />
        </div>
        <Button type="submit" className="mt-5">Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks