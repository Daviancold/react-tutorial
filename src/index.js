import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    title: 'The Women: A Novel',
    author: 'Kristin Hannah',
    img: './images/thewomennovel.jpg',
    id: 1,
  },
  {
    title: 'The Holy Grail of Investing',
    author: 'Tony Robbins',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71zQ-0+fV7L._AC_UL600_SR600,400_.jpg',
    id: 2,
  }
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} /> // HTML "Arguments"
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
