import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

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


  return (
    <>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Cart is Empty uno! Brokie</Text>
        </View>
      ) : (
        <View style={styles.cart}>
            <View style={styles.cartHeader}>
              <Text style={{ color: "#000000", fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Cart</Text>
            </View>
            <ScrollView contentContainerStyle={styles.cartContainer}>
              {cart.map((cartItem, index) => (
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={cartItem.image} style={{ width: 100, height: 100 }} />
                    </View>
                    <View style={styles.itemRight}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22}}>{cartItem.name}</Text>
                        <Text style={{ fontSize: 18, color: 'grey', marginTop: 5}} >Quantity:{quantities[index]} </Text>

                        <View  style={styles.cartPrice_flex}>
                            {cartItem.discount ? <Text style={styles.price}>GH₵{(parseInt(cartItem.price) - parseInt(cartItem.discount)/100 * parseInt(cartItem.price)) * quantities[index]}</Text> : <Text style={styles.price}>GH₵{cartItem.price}</Text>}
                            <View style={styles.buttons}>
                                <AntDesign name="minuscircle" size={25} color="#ff5f00" />
                                <Text style={{fontSize: 20}}>{quantities[index]}</Text>
                                <AntDesign name="pluscircle" size={25} color="#ff5f00" onPress={increment}/>
                            </View>
                        </View>
                    </View>
                    
                </View>
                
              ))}
              
            </ScrollView>
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
  cart:{
    backgroundColor: "#f5f5f5",
    flex:1
  },
  cartContainer: {
    padding: 10,
    backgroundColor: 'red'
  },
  cartHeader: {
    backgroundColor: "#faf4f0",
    padding: 20,
    marginTop: 30,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 15
  },
  itemRight:{
    width: '70%',
    height: '100%',
    padding: 10
  },
  cartPrice_flex: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50%',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#000000',
    marginTop: 5,
  },
  imageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5
  },
  divider: {
    width: '100%',
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
  },
  
});
