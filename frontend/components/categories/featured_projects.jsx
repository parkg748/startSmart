import React from 'react';
import {Link} from 'react-router-dom';

function FeaturedProjects({ category, subcategories, subcategoriesUppercase, description }) {
  return (
    <div className='categories-header'>
      <h3>{category}</h3>
      <p>{description}</p>
      {subcategoriesBox}
    </div>
  );
}

export default FeaturedProjects;
