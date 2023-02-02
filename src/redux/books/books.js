const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

const initialState = [];

export const addedBook = (bookId) => ({
  type: ADD_BOOK,
  payload: bookId,
});

export const removedBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});
export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case LOAD_BOOKS: {
      const bookArray = [];
      Object.entries(action.books).forEach(([key, value]) => {
        bookArray.push({
          id: key,
          title: value[0].title,
          category: value[0].category,
          author: value[0].author,
        });
      });
      return bookArray;
    }
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
