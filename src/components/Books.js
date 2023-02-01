import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Addbook from './Addbook';

export default function Books() {
  const booklist = useSelector((state) => state.books);

  return (
    <>
      <div>
        <ul>
          {booklist.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} />
              <div>
                <button type="button">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div><Addbook /></div>
    </>
  );
}
