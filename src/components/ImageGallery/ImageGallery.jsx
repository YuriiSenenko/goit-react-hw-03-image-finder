import { ImmageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { status, gallery, onModal, modalImg } = this.props;
    return (
      //Перекидую пропс далі
      <div>
        <ul className="ImageGallery">
          <ImmageGalleryItem
            onModal={onModal}
            modalImg={modalImg}
            gallery={gallery}
            status={status}
          />
        </ul>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  onModal: PropTypes.func,
  gallery: PropTypes.array,
  status: PropTypes.string,
  modalImg: PropTypes.func,
};
