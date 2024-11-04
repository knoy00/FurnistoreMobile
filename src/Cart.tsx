import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { parse } from "@babel/core";

const Cart = ({ route }) => {
  const { cart } = route.params;
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const increment = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const decrement = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1; 
      }
      return newQuantities;
    });
  };

  const subTotal = cart.reduce((acc, item, index) => {
    const price = item.discount ? (parseInt(item.price) - (parseInt(item.discount) / 100) * parseInt(item.price)): parseInt(item.price);
    return acc + price * quantities[index];
  }, 0)

  const shipping = (150);
  const tax = (0.1 * subTotal);
  const total = (subTotal + shipping + tax).toFixed(2);;


  return (
    <>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Cart is Empty! Brokie</Text>
        </View>
      ) : (
        <View style={styles.cart}>
          <View style={styles.cartHeader}>
            <Text style={styles.cartHeaderText}>Cart</Text>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={styles.cartContainer}>
              {cart.map((cartItem, index) => (
                <View>
                  <View key={index} style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    <Image source={cartItem.image} style={styles.image} />
                  </View>
                  <View style={styles.itemRight}>
                    <Text style={styles.itemName}>{cartItem.name}</Text>
                    <Text style={styles.quantityText}>Quantity: {quantities[index]}</Text>
                    <View style={styles.cartPriceFlex}>
                      <Text style={styles.price}>
                        GH₵{cartItem.discount
                          ? ((parseInt(cartItem.price) - (parseInt(cartItem.discount) / 100) * parseInt(cartItem.price)) * quantities[index]).toFixed(2)
                          : cartItem.price * quantities[index]}
                      </Text>
                      <View style={styles.buttons}>
                        <AntDesign name="minuscircle" size={25} color="#ff5f00" onPress={() => decrement(index)} />
                        <Text style={styles.quantityDisplay}>{quantities[index]}</Text>
                        <AntDesign name="pluscircle" size={25} color="#ff5f00" onPress={() => increment(index)} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.divider}></View>

              </View>
                
              ))}
             
            </ScrollView>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.totalContainer}>
            <View style={styles.totalText}>
              <Text style={styles.totalTextSubheader}>Sub Total</Text>
              <Text style={styles.totalTextSubheaderValue}>GH₵ {subTotal.toFixed(2)}</Text>
            </View>

            <View style={styles.totalText}>
              <Text style={styles.totalTextSubheader}>Shipping</Text>
              <Text style={styles.totalTextSubheaderValue}>GH₵ {shipping}</Text>
            </View>

            <View style={styles.totalText}>
              <Text style={styles.totalTextSubheader}>Tax(10%)</Text>
              <Text style={styles.totalTextSubheaderValue}>GH₵ {tax.toFixed(2)}</Text>
            </View>
            
            <View style={styles.totalText}>
              <Text style={styles.totalTextSubheader}>Total</Text>
              <Text style={styles.totalTextSubheaderValue}>GH₵ {total}</Text>
            </View>

            <TouchableOpacity style={styles.checkout} onPress={() => addToCart(item)}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: '#ffffff'}}>Checkout</Text>
            </TouchableOpacity>

          </View>

        </View>
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
  cart: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  cartContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  cartHeader: {
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 30
  },
  cartHeaderText: {
    color: "#000000",
    fontSize: 25,
    fontWeight: 'bold',
  },
  scrollContainer: {
    height: Dimensions.get('window').height * 0.6,
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 0,
    marginBottom: 10,
    
  },
  imageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  itemRight: {
    flex: 1,
    paddingHorizontal: 15,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  cartPriceFlex: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityDisplay: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  divider: {
    width: '90%',
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
    alignSelf: 'center'
  },
  totalContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderTopColor: '#c1c1c1',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  totalText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  totalTextSubheader: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold'
  },
  totalTextSubheaderValue: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 'bold'
  },
  checkout: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ff5f00',
    borderRadius: 30,
    marginTop: 10
  }

});
