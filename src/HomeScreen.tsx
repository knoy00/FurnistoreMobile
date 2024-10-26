import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
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
            <View style={styles.buttons}>
                <Button 
                title="All"
                onPress={() => alert('Categories')}
                />
                <Button 
                title="All"
                onPress={() => alert('Categories')}
                />
                <Button 
                title="All"
                onPress={() => alert('Categories')}
                />
                <Button 
                title="All"
                onPress={() => alert('Categories')}
                />
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
    buttons: {
        position: 'absolute',
        top: 150,
        width:  '100%',
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    }
});
