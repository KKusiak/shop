import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ShopNavigator from "./navigation/shopNavigator";
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <ShopNavigator></ShopNavigator>
    </Provider>
  );
}
