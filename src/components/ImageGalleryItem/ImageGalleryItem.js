import React from 'react';
import "./style.css";
import PropTypes from 'prop-types';

const ImageGalleryItem = (props)=> {
  const click=()=>{
    props.openModal(props.image);
  }
   {
    const{image}=props;
    return (
      <li className="ImageGalleryItem" onClick={click}>
        <img className='ImageGalleryItem-image' src={image.largeImageURL} alt={image.tags} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.object,
    openModal: PropTypes.func
};

export default ImageGalleryItem;
