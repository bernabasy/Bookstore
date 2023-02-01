import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksApi';

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
