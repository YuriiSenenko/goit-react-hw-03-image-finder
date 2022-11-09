import React from 'react';
import './Searchbar.css';
import { ReactComponent as SearchIcon } from '../icons/icon-search.svg';

export const Searchbar = () => {
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <SearchIcon width="18px" height="18px" />
          {/* <span class="SearchForm-button-label">Search</span> */}
        </button>

        <input
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
