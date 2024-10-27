import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 

function Menu(){
    const [bedroomOpen, setBedroomOpen] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const toggleBedroom = () => {
        setBedroomOpen(!bedroomOpen);

        // Reset animation for opening or closing the dropdown
        Animated.timing(animatedValue, {
            toValue: bedroomOpen ? 0 : 1, // fade out if closing
            duration: 800,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    // Define the animated style for opacity
    const animatedStyle = {
        opacity: animatedValue,
    };

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="home" size={25} color="#ffffff" />
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={toggleBedroom}>
                    <Icon name="bed" size={25} color="#ffffff" />
                    <Text style={styles.text}>Bed</Text>
                    <Icon name="angle-down" size={25} color="#ffffff" style={{marginLeft: 'auto'}}/>
                </TouchableOpacity>

                {bedroomOpen && (
                    <>
                        <TouchableOpacity style={styles.dropDown}>
                            <Animated.View style={[styles.subDropdown, animatedStyle]}>
                                <Text style={styles.dropDownText}>Queen Size</Text>
                            </Animated.View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <Animated.View style={[styles.subDropdown, animatedStyle]}>
                                <Text style={styles.dropDownText}>King Size</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </>
                )}

                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="info-circle" size={25} color="#ffffff" />
                    <Text style={styles.text}>About us</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#FFEEE5',
        height: 1000,
        flexDirection: 'column'
    }, 
    menu: {
        backgroundColor: '#FFEEE5',
        marginTop: 100,
        height: 800,
        width: '100%',
        padding: 20
    },
    menuItem: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        width: '100%',
        padding: 10,
        height: 50,
        backgroundColor: '#ff5f00',
        borderRadius: 10,
        marginBottom: 15
    },
    text: {
        color: '#ffffff',
        fontSize: 18
    },
    dropdown: {
        paddingLeft: 10,
    },
    subDropdown: {
        paddingLeft: 10,
        paddingTop: 0,
    },
    dropDownText: {
        fontSize: 20,
        paddingVertical: 0,
        color: '#ff5f00',
        paddingLeft: 0,
        textAlign: 'left',
        marginBottom: 10,
    }
});
