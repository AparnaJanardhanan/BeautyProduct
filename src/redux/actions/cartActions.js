export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  };
};

export const DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT';

export const decrementProductCount = (productId) => {
  return {
    type: DECREMENT_PRODUCT_COUNT,
    payload: { productId },
  };
};
