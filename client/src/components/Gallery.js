import React from 'react';
import '../styles/gallery.css';

const Gallery = ({ images }) => {


  return (
    <div className="gallery">
      {images.map((image, index, link) => (
        <div className="gallery-item" key={index}>
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={`Image ${index}`} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
