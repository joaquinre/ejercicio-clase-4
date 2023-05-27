'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BooksList from "./components/BooksList";
import BooksFilter from "./components/BooksFilter";

export default function Home() {
  const [author, setAuthor] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([])

  const handleInputChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(author);
    const books = BooksList()
    const filter = books.filter(book => {
      return book.author.toLowerCase().includes(author.toLowerCase().trim());
    });
    setFilteredBooks(filter)
  };

  return (
    <body>
      <div class="flex justify-center items-center h-screen bg-gray-100">
          <div class="w-64 h-64 bg-gray-300 rounded-md flex flex-col items-center p-4">
              <form onSubmit={handleSubmit} class="mb-4 flex">
                  <input 
                    type="text" 
                    value={author}
                    onChange={handleInputChange}
                    class="w-full px-3 py-2 border border-gray-400 rounded-md mr-2" 
                    placeholder="Enter author name"

                  />
                  <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md">
                      <i class="fas fa-search"></i>
                  </button>
              </form>
                <ul class="w-full" id="bookList">
                  {filteredBooks.length > 0 && <BooksFilter books={filteredBooks} />}
                </ul>
          </div>
      </div>
    </body>
  )
}
