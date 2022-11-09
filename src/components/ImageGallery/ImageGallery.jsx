import { ImmageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import React from 'react';

export const ImageGallery = () => {
  return (
    <div>
      <ul className="ImageGallery">
        <ImmageGalleryItem />
      </ul>
    </div>
  );
};
