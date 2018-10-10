import React from 'react';

export const fetchCategory = category => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${category}`
  });
};
