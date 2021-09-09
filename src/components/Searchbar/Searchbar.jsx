import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  const [searchInputValue, setSearchInputValue] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit(searchInputValue);
    setSearchInputValue('');
  };
  const onChangeHandler = e => {
    setSearchInputValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={onChangeHandler}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchInputValue}
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
