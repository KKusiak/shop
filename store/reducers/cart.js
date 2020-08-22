import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/CartItem";
const initailState = {
  items: {},
  totalAmount: 0,
};

export default (state = initailState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      if (state.items[addedProduct.id]) {
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
        return {
          ...state,
          items: {
            ...state.items,
            [addedProduct.id]: updatedCartItem,
          },
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
        return {
          ...state,
          items: {
            ...state.items,
            [addedProduct.id]: newCartItem,
          },
          totalAmount: state.totalAmount + productPrice,
        };
      }
    case REMOVE_FROM_CART:
      const selectedItem = state.items[action.productId];
      const updatedCartItems = { ...state.items };
      delete updatedCartItems[action.productId];
      return {
        ...state,
        items: updatedCartItems,
        totalAmount:
          state.totalAmount - selectedItem.productPrice * selectedItem.quantity,
      };
  }
};
