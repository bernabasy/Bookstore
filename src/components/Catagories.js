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
    <div className=" m-5 p-5 container h-100">
      <div className="row h-100 justify-content-center align-items-center ">
        <div>
          <button className="m-5 w-25 btn btn-primary" type="button" onClick={handelCleck}>
            Check Status
          </button>
          <h1>{categorie}</h1>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
