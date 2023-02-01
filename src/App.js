import { Route, Link, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Catagories from './components/Catagories';
import './App.css';
import { loadBooksAsync } from './redux/books/booksApi';

function App() {
  const dispatch = useDispatch();
  dispatch(loadBooksAsync());
  return (
    <>
      <nav>
        <h1>
          Bookstore CMS
        </h1>
        <ul>
          <li>
            <Link to="/"> Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
