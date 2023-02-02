import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Addbook from './Addbook';
import { removeBookAsync } from '../redux/books/booksApi';

const { v4: uuidv4 } = require('uuid');

export default function Books() {
  const booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <ul>
          {booklist.map((book) => (
            <li key={uuidv4()}>
              <Book title={book.title} author={book.author} category={book.category} />
              <div>
                <button type="button" onClick={() => dispatch(removeBookAsync(book.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div><Addbook /></div>
    </>
  );
}
