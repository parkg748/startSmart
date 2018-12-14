import React from 'react';

export const fetchCategory = category => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${category}`
  });
};

export const fetchCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};
