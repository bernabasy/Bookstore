import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksApi';

const { v4: uuidv4 } = require('uuid');

const Addbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAsync({
      title, author, item_id: uuidv4(), category: '',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="w-100 p-5">
      <h3>Add New Book</h3>
      <form className="d-flex w-100" id="myForm">
        <div className="w-50">
          <input className="rounded h-100 m-1 h w-75" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" required />
        </div>
        <div className="w-25">
          <input className=" rounded h-100 m-1 w-75" type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book author" required />
        </div>
        <div className="w-25">
          <button className="w-75 btn btn-primary btn-lg" type="submit" onClick={handelSubmit}>ADD New</button>
        </div>
      </form>
    </div>
  );
};
export default Addbook;
