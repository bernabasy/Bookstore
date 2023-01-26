import React from 'react';
import PropTypes from 'prop-types';

export default function Books(props) {
  const { title, author } = props;
  return (
    <>
      <div>
        <ul>
          <li>
            <span>{title}</span>
            <span>{author}</span>
            <button type="submit">Remove</button>
          </li>
        </ul>
        <h2>Add New Book</h2>
        <form>
          <div>
            <input placeholder="Book title" />
          </div>
          <div>
            <select>
              <option selected>Category</option>
              <option value="ONE">Category1</option>
              <option value="TWO">categories2</option>
            </select>
          </div>
          <div>
            <button type="submit">ADD Book</button>
          </div>
        </form>
      </div>

    </>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
