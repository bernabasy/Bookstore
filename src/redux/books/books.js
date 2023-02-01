const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Economics new',
    author: 'Elen',
    id: 1,
  },
  {
    title: 'The book',
    author: 'Thomas Jeferson',
    id: 2,
  },
  {
    title: 'The world',
    author: 'Jone Thomas',
    id: 3,
  },
];

export const addedBook = (bookadded) => ({
  type: ADD_BOOK,
  payload: bookadded,
});

export const removedBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
