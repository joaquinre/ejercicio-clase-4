import React from 'react'

function BooksFilter({ books }) {
  return (
    <>
        {books.map((book, index) => (
          <li key={index} class="flex items-center mb-2">
            <span class="text-2xl" role="img" aria-label="Book">📖</span>
            <div class="flex flex-col ml-2">
              <span class="text-gray-800 -mb-1">{book.title}</span>
              <span class="text-[13px] text-gray-400">{book.author}</span>
            </div>
          </li>
        ))}
    </>
  )
}

export default BooksFilter