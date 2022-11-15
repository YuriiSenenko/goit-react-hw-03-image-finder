import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { toast } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

const API_KEY = '30036034-49bdb558087010c436563671a';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    gallery: null,
    showModal: false,
    error: null,
    status: 'idle',
    loader: false,
    largeImageURL: '',
  };

  // Записуємо результат пошуку в state App
  handleFormSubmit = searchValue => {
    this.setState({ searchValue: searchValue, page: 1, gallery: [] });
  };

  // Змінює сторінку пагінації
  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // Відкривашка модального вікна
  toggleModal = event => {
    // console.log(event.currentTarget.id);
    this.setState(state => ({
      showModal: !state.showModal,
      // largeImage: event.currentTarget.id,
    }));
  };

  modalImg = img => {
    console.log(img);
    this.setState({ largeImageURL: img });
    // return event.currentTarget.id;
  };

  componentDidUpdate = (_, prevState) => {
    const prevValue = prevState.searchValue;
    const nextValue = this.state.searchValue;

    if (prevValue !== nextValue || prevState.page !== this.state.page) {
      //запускаєм loader, і обнуляємо стейт перед новим HTTP запитом
      this.setState({ loader: true, status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${nextValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
      )
        .then(res => res.json())

        .then(gallery =>
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...gallery.hits],
            status: 'resolved',
          }))
        )
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(this.setState({ loader: false }));
    }
  };

  render() {
    const { status, gallery } = this.state;

    // if (status === 'idle') {
    //   return;
    // }
    if (status === 'pending') {
      return;
    }
    if (status === 'rejected') {
      return toast.error('The search field is empty!');
    }
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.gallery && (
          <ImageGallery
            gallery={gallery}
            status={status}
            onModal={this.toggleModal}
            modalImg={this.modalImg}
          />
        )}

        {gallery && <Button loadMore={this.changePage} />}
        {this.state.loader && <Loader />}

        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={this.state.largeImageURL}
          />
        )}
        <ToastContainer
          theme="colored"
          position="top-center"
          autoClose={2000}
        />
      </div>
    );
  }
}
