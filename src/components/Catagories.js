import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Catagories = () => {
  const dispatch = useDispatch();
  const categorie = useSelector((state) => state.categories);
  const handelCleck = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" onClick={handelCleck}>
        Check Status
      </button>
      <h1>{categorie}</h1>
    </>
  );
};

export default Catagories;
