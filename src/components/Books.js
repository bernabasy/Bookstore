import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Book from './Book';
import Addbook from './Addbook';
import { removeBookAsync } from '../redux/books/booksApi';

const { v4: uuidv4 } = require('uuid');

export default function Books() {
  const booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const chapter = Math.floor((Math.random() * Math.floor((percentage / 5)))) + 1;
  return (
    <>
      <div>
        <ul>
          {booklist.map((book) => (
            <li key={uuidv4()} className=" d-flex list-unstyled border rounded m-4 border-secondary height">
              <div className="mt-3 w-50">
                <div className="mx-3">
                  <Book title={book.title} author={book.author} category={book.category} />
                </div>
                <div className="d-flex mt-0">
                  <button type="button" className="btn btn-light">
                    Comments
                  </button>
                  <div className="vertical-divider" />
                  <button type="button" className="btn btn-light" onClick={() => dispatch(removeBookAsync(book.id))}>Remove</button>
                  <div className="vertical-divider" />
                  <button type="button" className="btn btn-light">
                    Edit
                  </button>
                </div>
              </div>
              <div className="d-flex w-50 float-right ">
                <div className="d-flex align-middle gap-5 ">
                  <div className="d-flex align-middle w-25 ">
                    <CircularProgressbar value={percentage} />
                  </div>
                  <div className="d-flex align-items-center ">
                    <div className="d-flex flex-column ">
                      <h3 className=" ">{`${percentage}%`}</h3>
                      <p className=" circular-bar-h4">Completed</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-column">
                    <p className="">Current Chapter</p>
                    <p className="">
                      Chapter:
                      {`${chapter}`}
                    </p>
                    <button type="submit" className="btn btn-primary">
                      Update Progress
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div><Addbook /></div>
    </>
  );
}
