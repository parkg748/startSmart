import React from 'react';

export const createBasics = project => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: { project }
  });
};
