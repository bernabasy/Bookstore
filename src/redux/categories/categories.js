const CHECK_STATUS = 'redux/books/CHECK_STATUS';
const initialState = {
  categories: [],
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
const categoriesReducer = (state = initialState, action = {}) => {
  if (action.type === 'checkStatus') { return [...state.categories, 'Under construction']; }
  return state;
};

export default categoriesReducer;
