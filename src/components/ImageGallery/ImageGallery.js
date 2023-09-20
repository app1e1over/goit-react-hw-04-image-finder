import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import './style.css';

const ImageGallery =(props)=>{
  
    const { images, openModal } = props;
    let str = images.flatMap(img => (
      <ImageGalleryItem
        openModal={openModal}
        image={img}
        key={nanoid()}
      ></ImageGalleryItem>
    ));
    return (
      <>
        <ul className="ImageGallery">{str}</ul>

       
      </>
    );
  
}

ImageGallery.propTypes = {
  image: PropTypes.array,
  openModal: PropTypes.func,
};

export default ImageGallery;
