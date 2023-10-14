import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT_PRODUCT_COUNT } from "../actions/cartActions";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload
        ),
      };
    case DECREMENT_PRODUCT_COUNT:
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
