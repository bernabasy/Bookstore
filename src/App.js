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
      <nav className="d-flex ms-3 text-decoration-none align-content-center border-bottom border-secondary ml-3">
        <h1 className="w-25 mt-3">
          Bookstore CMS
        </h1>
        <ul className="d-flex w-100 justify-content-between mt-3">
          <li className="d-flex align-content-center gap-3">
            <h4 className="mt-3">
              <Link className=" pt-5 text-reset text-decoration-none" to="/"> Books</Link>
            </h4>
            <div className="mt-3 vertical-divider" />
            <h4 className="mt-3">
              <Link className="text-reset text-decoration-none" to="/categories">Categories</Link>
            </h4>
          </li>
          <div className="float-right">
            <img
              className="avatar avatar-64 bg-light rounded-circle text-white p-2"
              src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
              alt="#"
            />
          </div>
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
