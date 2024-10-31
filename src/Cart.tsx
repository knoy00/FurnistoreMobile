import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Cart = ({ route }) => {
  const { cart } = route.params;

  return (
    <>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Cart is Empty uno! Brokie</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.cartContainer}>
          {cart.map((cartItem, index) => (
            <Text key={index}>{cartItem.name}</Text>
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cartContainer: {
    padding: 10,
  },
});
