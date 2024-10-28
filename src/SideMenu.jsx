import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function Menu(){
    const [bedroomOpen, setBedroomOpen] = useState(false);
    const [livingroomOpen, setLivingroomOpen] = useState(false);
    const [diningroomOpen, setDiningroomOpen] = useState(false);
    const [officeOpen, setofficeOpen] = useState(false);
    const [kitchenOpen, setKitchenOpen] = useState(false);
    const [outdoorOpen, setOutdoorOpen] = useState(false);

    const toggleBedroom = () => setBedroomOpen(!bedroomOpen);
    const toggleLivingroom = () => setLivingroomOpen(!livingroomOpen);
    const toggleDiningroom = () => setDiningroomOpen(!diningroomOpen);
    const toggleOffice = () => setofficeOpen(!officeOpen);
    const toggleKitchen = () => setKitchenOpen(!kitchenOpen);
    const toggleOutdoor = () => setOutdoorOpen(!outdoorOpen);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}><Text style={styles.innerText}>Furni</Text>Store</Text>
            </View>

            <ScrollView 
                contentContainerStyle={styles.scrollContent} 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="home" size={25} color="#ffffff" />
                        <Text style={styles.text}>Home</Text>
                        
                    </TouchableOpacity>

                    <View style={styles.divider}></View>

                    <TouchableOpacity style={styles.menuItem} onPress={toggleBedroom}>
                        <Icon name="bed" size={25} color="#ffffff" />
                        <Text style={styles.text}>Bed Room</Text>
                        <Icon name={bedroomOpen ? "angle-up" : "angle-down"} size={25} color="#ffffff" style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>

                    {bedroomOpen && (
                        <>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Queen Size</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>King Size</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    <TouchableOpacity style={styles.menuItem} onPress={toggleLivingroom}>
                        <MaterialIcons name="living" size={25} color="#ffffff" />
                        <Text style={styles.text}>Living Room</Text>
                        <Icon name={livingroomOpen ? "angle-up" : "angle-down"} size={25} color="#ffffff" style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>

                    {livingroomOpen && (
                        <>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Sofa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Table</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>TV Console</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    <TouchableOpacity style={styles.menuItem} onPress={toggleDiningroom}>
                        <MaterialIcons name="table-bar" size={25} color="#ffffff" />
                        <Text style={styles.text}>Dining Set</Text>
                        <Icon name={diningroomOpen ? "angle-up" : "angle-down"} size={25} color="#ffffff" style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>

                    {diningroomOpen && (
                        <>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Cabinet</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Kitchen Island</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Kitchen Stools</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    <TouchableOpacity style={styles.menuItem} onPress={toggleKitchen}>
                        <Icon name="cutlery" size={25} color="#ffffff" />
                        <Text style={styles.text}>Kitchen</Text>
                        <Icon name={kitchenOpen ? "angle-up" : "angle-down"} size={25} color="#ffffff" style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>

                    {kitchenOpen && (
                        <>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Queen Size</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>King Size</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    <TouchableOpacity style={styles.menuItem} onPress={toggleOffice}>
                        <MaterialCommunityIcons name="office-building" size={25} color="#ffffff" />
                        {/* <Icon name="briefcase" size={25} color="#ffffff" /> */}
                        <Text style={styles.text}>Office</Text>
                        <Icon name={officeOpen ? 'angle-up' : 'angle-down'} size={25} color="#ffffff" style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>

                    {officeOpen && (
                        <>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>Queen Size</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropDown}>
                                <Text style={styles.dropDownText}>King Size</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    {/* Repeat similar structure for other sections */}
                    
                    <View style={styles.divider}></View>

                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="tags" size={25} color="#ffffff" />
                        <Text style={styles.text}>Sales and Promos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="user" size={25} color="#ffffff" />
                        <Text style={styles.text}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="phone" size={25} color="#ffffff" />
                        <Text style={styles.text}>Customer Service</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="info-circle" size={25} color="#ffffff" />
                        <Text style={styles.text}>About us</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEEE5',
        width: '100%',
        marginLeft: 0
    },
    logoContainer: {
        backgroundColor: '#FFEEE5',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ff5f00',
        borderBottomWidth: 2,
        zIndex: 1,
    },
    logo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
    },
    innerText: {
        color: '#ff5f00'
    },
    scrollContent: {
        paddingTop: 10,
        paddingBottom: 50,  // Extra padding to ensure items are fully visible at the bottom
    },
    menu: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 0
    },
    menuItem: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ff5f00',
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 7
        
    },
    text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    divider: {
        width: '100%',
        borderBottomColor: '#ff5f00',
        borderBottomWidth: 2,
        marginBottom: 10
    },
    dropDown: {
        paddingLeft: 20,
        paddingVertical: 5,
    },
    dropDownText: {
        fontSize: 18,
        color: '#ff5f00',
    },
});
