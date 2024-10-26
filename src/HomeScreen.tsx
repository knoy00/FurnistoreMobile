import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Icon name="bars" size={25} color="#8C8C8C" />
                <Text style={styles.text}><Text style={styles.innerText}>Furni</Text>Store</Text>
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
                    <Text>Table</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                        <View style={styles.promoContainer}>
                            <Text style={styles.promoText}>Get your Special sale up to 50%</Text>
                            <TouchableOpacity style={styles.promoButton}>
                                <Text style={styles.promoButtonText}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.promoContainer}>
                            <Text style={styles.promoText}>Get your Special sale up to 50%</Text>
                            <TouchableOpacity style={styles.promoButton}>
                                <Text style={styles.promoButtonText}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.promoContainer}>
                            <Text style={styles.promoText}>Get your Special sale up to 50%</Text>
                            <TouchableOpacity style={styles.promoButton}>
                                <Text style={styles.promoButtonText}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.promoContainer}>
                            <Text style={styles.promoText}>Get your Special sale up to 50%</Text>
                            <TouchableOpacity style={styles.promoButton}>
                                <Text style={styles.promoButtonText}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: 'white',
        height: 80,
        zIndex: 1, // Ensure navbar stays on top
        marginTop: 50  
    },
    text: {
        color: '#000000',
        fontSize: 25,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    innerText: {
        color: '#ff5f00'
    },
    navbarRight: {
        flexDirection: 'row',
        gap: 15
    },
    buttons_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF5F00',
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
    },
    scrollContent: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    content: {
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    promoContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        alignItems: '',
        marginBottom: 20,
        height: 200,
        marginTop: 0
    },
    promoText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    promoButton: {
        backgroundColor: '#FF5F00',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    promoButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }, 
});
