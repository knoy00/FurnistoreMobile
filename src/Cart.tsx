import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const Cart = ({ route }) => {
  const { cart } = route.params;

  const [quantity, setQuantity] = useState(1)


  return (
    <>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Cart is Empty uno! Brokie</Text>
        </View>
      ) : (
        <>
            <View style={styles.cartHeader}>
              <Text style={{ color: "white", fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Cart</Text>
            </View>
            <ScrollView contentContainerStyle={styles.cartContainer}>
              {cart.map((cartItem, index) => (
                <View style={styles.itemContainer}>
                    <View>
                        <Image source={cartItem.image} style={{ width: 100, height: 100 }} />
                    </View>
                    <View style={styles.itemRight}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20}}>{cartItem.name}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'grey'}}>Quantity:{} </Text>

                        <View  style={styles.cartPrice_flex}>
                            {cartItem.discount ? <Text style={styles.price}>GH₵{parseInt(cartItem.price) - parseInt(cartItem.discount)/100 * parseInt(cartItem.price)}</Text> : <Text style={styles.price}>GH₵{cartItem.price}</Text>}
                            <View style={styles.buttons}>
                                <AntDesign name="minuscircle" size={25} color="#ff5f00" />
                                <Text>{0}</Text>
                                <AntDesign name="pluscircle" size={25} color="#ff5f00" />
                            </View>
                        </View>
                    </View>
                </View>
              ))}
            </ScrollView>
        </>
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
  cartHeader: {
    backgroundColor: "#ff5f00",
    padding: 20,
    marginTop: 30,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 15
  },
  itemRight:{
    backgroundColor:'red',
    width: '70%',
    height: '100%',
    padding: 10
  },
  cartPrice_flex: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50%',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
   
    marginTop: 5,
  }
});
