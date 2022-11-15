import { ImmageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      //Перекидую пропс далі
      <div>
        <ul className="ImageGallery">
          <ImmageGalleryItem
            onModal={this.props.onModal}
            modalImg={this.props.modalImg}
            gallery={this.props.gallery}
            status={this.props.status}
          />
        </ul>
      </div>
    );
  }
}
