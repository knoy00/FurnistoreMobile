import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 


function Menu(){
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="Home" size={25} color="#ffffff" />
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity></TouchableOpacity>

        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: 'red',
        height: 1000,
        flexDirection: 'column'
    }
});