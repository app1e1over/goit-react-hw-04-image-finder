import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Searchbar = props => {
  return (
    <header className="searchbar">
      <form
        className="SearchForm"
        onSubmit={e => {
          e.preventDefault();
          props.set(e.target.elements['search'].value);
        }}
      >
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="search"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  set: PropTypes.func,
};

export default Searchbar;
