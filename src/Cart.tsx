import React from "react";
import { View, StyleSheet, Text, ScrollView, Touchable } from "react-native";


const Cart = () => {
    return(
        <>
            <View style={styles.container}>
                <Text>Cart is Empty uno</Text>
            </View>
        </>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1
    }
})