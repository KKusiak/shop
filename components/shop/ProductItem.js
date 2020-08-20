import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextComponent,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableHighlight } from "react-native-gesture-handler";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <TouchableOpacity onPress={props.onViewDetail}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={styles.details}>
          <Text>{props.title}</Text>
          <Text>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={props.onViewDetail}>
            <Text>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onAddToCart}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});

export default ProductItem;
