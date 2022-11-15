import React from 'react';
import { toast } from 'react-toastify';
import './Searchbar.css';
// import { ReactComponent as SearchIcon } from '../icons/icon-search.svg';
// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

// const API_KEY = '30036034-49bdb558087010c436563671a';

export class Searchbar extends Component {
  state = {
    searchValue: '',
    page: 1,
    gallery: [],
  };

  // Записує значення пошуку в state при зміні input
  handleChange = e => {
    this.setState({ searchValue: e.currentTarget.value.toLowerCase() });
  };

  // Відправляє значення searchValue в state App
  handleSubmit = e => {
    const { searchValue, page, gallery } = this.state;
    e.preventDefault();

    //якщо input пустий, не сабмітити форму
    if (this.state.searchValue.trim() === '') {
      toast.error('The search field is empty!');
      return;
    }
    this.props.onSubmit(searchValue, page, gallery);
    // this.setState({ searchValue: '', page: 1, gallery: [] });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

// Searchbar.propTupes = {
//   onSubmit: PropTypes.func,
// };
