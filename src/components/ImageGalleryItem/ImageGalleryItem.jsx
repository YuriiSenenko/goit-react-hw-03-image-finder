import React, { Component } from 'react';
import { toast } from 'react-toastify';
import './ImageGalleryItem.css';
import { Loader } from 'components/Loader/Loader';

const API_KEY = '30036034-49bdb558087010c436563671a';

export class ImmageGalleryItem extends Component {
  state = {
    gallery: null,
    loading: false,
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevValue = prevProps.searchValue;
    const nextValue = this.props.searchValue;

    if (prevValue !== nextValue) {
      this.setState({ loading: true });

      fetch(
        'https://pixabay.com/api/?q=' +
          nextValue +
          '&page=1&key=' +
          API_KEY +
          '&image_type=photo&orientation=horizontal&per_page=12'
      )
        .then(res => res.json())
        .then(gallery => this.setState({ gallery }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  };

  render() {
    const { loading, gallery, error } = this.state;

    return (
      <>
        {error && toast.error('The search field is empty!')}
        {loading && <Loader />}
        {gallery &&
          gallery.hits.map(elem => (
            <li key={elem.id} className="ImageGalleryItem">
              <img src={elem.webformatURL} alt={elem.tags} />
            </li>
          ))}
      </>
    );
  }
}
