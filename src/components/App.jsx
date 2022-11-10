import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchValue: '',
  };

  // Записуємо результат пошуку в state App
  handleFormSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchValue={this.state.searchValue} />
        <Button />
        <Loader />
        <Modal />
        <ToastContainer
          theme="colored"
          position="top-center"
          autoClose={2000}
        />
      </div>
    );
  }
}
