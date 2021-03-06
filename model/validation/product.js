'use strict';

const constraints = {
  name: {
    presence: true,
    format: {
      pattern: '[a-z0-9\-]+',
      message: 'Path can only contain letters, numbers and dashes'
    }
  },
  productId: {presence: true}
};

module.exports = constraints;
