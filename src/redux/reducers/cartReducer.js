const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  console.log('inside reducer', action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
