/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Profile from '../../src/images/jacobbassett.jpg';


function Image() {
  return (
    <div className="image-container">
        <img className="image-photo" src={Profile} alt='profile photo' width='317px' height='317px'/>
    </div>
  );
}

export default Image;
