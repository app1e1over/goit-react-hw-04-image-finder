import React, { Component } from 'react';
import "./style.css";
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  click=()=>{
    this.props.openModal(this.props.image);
  }
  render() {
    const{image}=this.props;
    return (
      <li className="ImageGalleryItem" onClick={this.click}>
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
