import React, { Component } from 'react';
import './App.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader />
        <Modal />
      </div>
    );
  }
}
