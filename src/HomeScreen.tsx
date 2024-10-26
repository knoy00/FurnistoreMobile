import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Icon name="bars" size={25} color="#8C8C8C" />
                <Text style={styles.text}>FurniStore</Text>
                <View style={styles.navbarRight}>
                    <Icon name="search" size={25} color="#8C8C8C" />
                    <Icon name="shopping-cart" size={25} color="#8C8C8C" />
                </View>
            </View>
            <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_inactive}>
                    <Text>Chair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_inactive}>
                    <Text>Sofa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_inactive}>
                    <Text>Dining </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_inactive}>
                    <Text>All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    navbar: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,  // Adjusted to ensure there's enough space
        height: 80,           // Increased height for visibility
        backgroundColor: 'white',
    },
    text: {
        color: 'red',
        fontSize: 25,
        marginLeft: 0,       // Add margin to the text for spacing
    },
    navbarRight: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15
    },
    buttons_container: {
        position: 'absolute',
        top: 130,
        width:  '100%',
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        fontSize: 25
    },
    button: {
        fontSize: 25,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#FF5F00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: '#FF5F00',
        fontWeight: 'bold'
    },
    button_text_inactive: {
        color: '#DCDCDC',
        fontWeight: 'bold'
    },
    button_inactive:{
        fontSize: 25,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
