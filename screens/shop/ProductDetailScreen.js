import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedItem = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedItem.imageUrl }} />
      <Text style={styles.price}>{selectedItem.price.toFixed(2)}$</Text>
      <Text style={styles.description}>{selectedItem.description}</Text>
      <View style={styles.action}>
        <TouchableOpacity
          onPress={() => {
            dispatch(cartActions.addToCart(selectedItem));
          }}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: { width: "100%", height: 200 },
  action: { marginVertical: 20, alignItems: "center" },
  addToCartText: { fontSize: 24, color: Colors.primary },
  price: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  description: { fontSize: 14, textAlign: "center", marginHorizontal: 20 },
});

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
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

export default ProductDetailScreen;
