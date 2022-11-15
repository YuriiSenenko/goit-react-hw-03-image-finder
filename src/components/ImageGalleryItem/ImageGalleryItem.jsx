import React, { Component } from 'react';
import './ImageGalleryItem.css';

export class ImmageGalleryItem extends Component {
  selectedPicture = e => {
    console.log(e);
  };
  render() {
    if (this.props.status === 'resolved') {
      return this.props.gallery.map(
        ({ id, webformatURL, tags, largeImageURL }) => (
          <li
            key={id}
            className="ImageGalleryItem"
            onClick={this.props.onModal}
          >
            <img
              src={webformatURL}
              alt={tags}
              onClick={() => this.props.modalImg(largeImageURL)}
            />
          </li>
        )
      );
    }
  }
}
