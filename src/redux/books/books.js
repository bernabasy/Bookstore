const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

const initialState = {
  book: [
    {
      id: 1,
      title: 'Economics new',
      author: 'Elen',
    },
    {
      id: 2,
      title: 'The book',
      author: 'Thomas Jeferson',
    },
    {
      id: 3,
      title: 'The world',
      author: 'Jone Thomas',
    },
  ],
};

export const addedBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const addedRemoved = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  if (action.type === 'ADD_BOOK') { return [...state, action.book]; }
  if (action.type === 'REMOVE_BOOK') { return state.filter((book) => book.id !== action.id); }
  return state;
};

export default bookReducer;
