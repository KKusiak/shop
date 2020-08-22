import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
const ProductsOvervierScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const disptach = useDispatch();

  return (
    <FlatList
      style={{ flex: 1 }}
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            disptach(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductsOvervierScreen.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconSize={24}
          title='Cart'
          iconName='ios-cart'
          color='#000'
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductsOvervierScreen;
