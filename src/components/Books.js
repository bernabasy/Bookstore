import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Addbook from './Addbook';
import { removedBook } from '../redux/books/books';

export default function Books() {
  const booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <ul>
          {booklist.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} />
              <div>
                <button type="button" onClick={() => dispatch(removedBook(book.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div><Addbook /></div>
    </>
  );
}
