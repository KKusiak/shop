import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/cart";
const CarteScreen = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const array = [];
    for (const key in state.cart.items) {
      array.push({
        id: key,
        ...state.cart.items[key],
      });
    }
    return array;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <TouchableOpacity disabled={cartItems.length === 0}>
          <Text>Order Now</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={cartItems}
          renderItem={(itemData) => (
            <CartItem
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              onRemove={() => {
                dispatch(cartActions.removeFromCart(itemData.item.id));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { margin: 20 },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 20,
  },
  summaryText: { fontSize: 18 },
  amount: { color: Colors.accent },
});

export default CarteScreen;
