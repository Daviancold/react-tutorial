import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books' // Curly Brackets is needed when importing specific items
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={ index } /> // HTML "Arguments"
      })}
    </section>
      </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
