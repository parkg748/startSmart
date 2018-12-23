import React from 'react';
import {Link} from 'react-router-dom';

function CategoriesHeader({ category, subcategories, subcategoriesUppercase, description }) {
  let subcategoriesBox = [];
  for (let i = 0; i < subcategories.length; i++) {
    subcategoriesBox.push(<Link className='subcategories-links' to={`/discover/categories/${subcategories[i]}`}>Explore {subcategoriesUppercase[i]}</Link>)
  }
  return (
    <div className='categories-header'>
      <h3>{category}</h3>
      <p>{description}</p>
      {subcategoriesBox}
    </div>
  );
}

export default CategoriesHeader;
