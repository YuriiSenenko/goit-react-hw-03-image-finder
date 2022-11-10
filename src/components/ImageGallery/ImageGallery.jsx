import { ImmageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      //Перекидую пропс далі
      <div>
        <ul className="ImageGallery">
          <ImmageGalleryItem searchValue={this.props.searchValue} />
        </ul>
      </div>
    );
  }
}
