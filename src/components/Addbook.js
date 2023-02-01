import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addedBook } from '../redux/books/books';

const Addbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = Math.random().toString();
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addedBook({ title, author, id }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form id="myForm">
        <div>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" required />
        </div>
        <div>
          <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book author" required />
        </div>
        <div>
          <button type="submit" onClick={handelSubmit}>ADD New</button>
        </div>
      </form>
    </div>
  );
};
export default Addbook;
