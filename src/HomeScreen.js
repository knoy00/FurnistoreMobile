import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Furniture from './Data/ImageData';
import { useNavigation } from "expo-router";




function HomeScreen({onHamburgerPress}) {
    
    const navigation = useNavigation();
    const [cart, setCart] = useState([]);
    function addToCart(item) {
        setCart(prevCart => [...prevCart, item]);
    }

    const img = Furniture.Images;
    const data = img.map((item) => {
        return(
            <TouchableOpacity key={item.id} style={styles.productItem} onPress={() => navigation.navigate('ItemOverview', { item: item, addToCart })}>
                <View>
                    <View style={styles.productImagePlaceholder} >
                        <Image source={item.image} style={{width: '100%', height: '100%'}} resizeMode="contain"/>
                    </View>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>Price: GH₵{item.discount ? parseInt(item.price) - parseInt(item.discount)/100 * parseInt(item.price): item.price}</Text>
                    {item.discount && (
                        <View style={styles.discount_container}>
                            <Text style={styles.discount}>-{item.discount}%</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            
        )
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Icon name="bars" size={25} color="#8C8C8C" onPress={onHamburgerPress}/>
                <Text style={styles.text}><Text style={styles.innerText}>Furni</Text>Store</Text>
                <View style={styles.navbarRight}>
                    <Icon name="search" size={25} color="#8C8C8C" />
                    <Icon name="shopping-cart" size={25} color="#8C8C8C" onPress={() => navigation.navigate('Cart', {cart})} />
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
                        <View style={styles.promoImage}>
                            <Image source={require('../assets/images/room-white.jpg')} style={{width: '100%', height: '100%', borderRadius: 20,}} />
                        </View>
                        <View style={styles.promoTextCtn}>
                            <Text style={styles.promoText}>Get your Special sale up to 30%</Text>
                            <TouchableOpacity style={styles.promoButton}>
                                <Text style={styles.promoButtonText}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.productGrid}>
                        {data}
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
        width: '95%',
        padding: 20,
        backgroundColor: '#faf4f0',
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 20,
        height: 200,
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
    },
    promoText: {
        fontSize: 20,
        fontWeight: 'light',
        marginBottom: 10,
        textAlign: 'center',
    },
    promoButton: {
        backgroundColor: '#FF5F00',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10
    },
    promoButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    promoImage: {
        width: '50%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 0,
        marginTop: 0,
        backgroundColor: '#FF5F00'
    },
    promoTextCtn: {
        width: '50%',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    productItem: {
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        // alignItems: 'center',
    },
    productImagePlaceholder: {
        width: '105%',
        height: 200,
        backgroundColor: '#faf4f0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        position: 'relative',
    },
    productName: {
        fontSize: 18,
        color: '#787878',
        marginTop: 10,
    },
    productPrice: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15
    },
    discount_container: {
        position: 'absolute',
        left: 10,
        top: 12,
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#FF5F00',
        width: 50,
    },
    discount: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
});

