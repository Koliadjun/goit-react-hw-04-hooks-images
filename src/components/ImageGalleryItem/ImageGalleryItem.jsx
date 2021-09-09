import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryItem({ src, onClick, largeImg }) {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(largeImg)}>
      <img src={src} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
