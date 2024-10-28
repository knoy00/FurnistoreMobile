const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#FFEEE5',
        position: 'relative'
    },
    scrollView: {
        marginTop: 160, // Space to prevent overlap with the logo
    },
    divider: {
        width: '100%',
        borderBottomColor: '#ff5f00',
        borderBottomWidth: 2,
        marginBottom: 10
    },
    logoContainer: {
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        position: 'absolute',
        top: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 25,
        
        
    },
    innerText: {
        color: '#ff5f00'
    },
    menu: {
        backgroundColor: '#000000',
        marginTop: 140,
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
        fontSize: 18,
        fontWeight: 'bold',

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

<View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}><Text style={styles.innerText}>Furni</Text>Store</Text>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="home" size={25} color="#ffffff" />
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>

                <View style={styles.divider}></View>

                <TouchableOpacity style={styles.menuItem} onPress={toggleBedroom}>
                    <Icon name="bed" size={25} color="#ffffff" />
                    <Text style={styles.text}>Bed Room</Text>
                    <Icon name="angle-down" size={25} color="#ffffff" style={{marginLeft: 'auto'}}/>
                </TouchableOpacity>

                {bedroomOpen && (
                    <>
                        <TouchableOpacity style={styles.dropDown}>
                            <Animated.View style={[styles.subDropdown]}>
                                <Text style={styles.dropDownText}>Queen Size</Text>
                            </Animated.View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <Animated.View style={[styles.subDropdown]}>
                                <Text style={styles.dropDownText}>King Size</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </>
                )}

                {/* //Living room dropdown */}
                <TouchableOpacity style={styles.menuItem} onPress={toggleLivingroom}>
                    <Icon name="bed" size={25} color="#ffffff" />
                    <Text style={styles.text}>Living Room</Text>
                    <Icon name={livingroomOpen ? "angle-up" : "angle-down"} size={25} color="#ffffff" style={{marginLeft: 'auto'}}/>
                </TouchableOpacity>

                {livingroomOpen && (
                    <>
                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Sofa</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Table</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>TV Console</Text>
                            </View>
                        </TouchableOpacity>
                    </>

                )}

                {/* //Dining room dropdown */}
                <TouchableOpacity style={styles.menuItem} onPress={toggleDiningroom}>
                    <Icon name="cutlery" size={25} color="#ffffff" />
                    <Text style={styles.text}>Dining</Text>
                    <Icon name={diningroomOpen ? 'angle-up' : 'angle-down'} size={25} color="#ffffff" style={{marginLeft: 'auto'}}/>
                </TouchableOpacity>

                {diningroomOpen && (
                    <>
                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Cabinet</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Island</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Stools</Text>
                            </View>
                        </TouchableOpacity>
                    </>

                )}

                {/* //Office room dropdown */}
                <TouchableOpacity style={styles.menuItem} onPress={toggleOffice}>
                    <Icon name="briefcase" size={25} color="#ffffff" />
                    <Text style={styles.text}>Office</Text>
                    <Icon name={officeOpen ? 'angle-up' : 'angle-down'} size={25} color="#ffffff" style={{marginLeft: 'auto'}}/>
                </TouchableOpacity>

                {officeOpen && (
                    <>
                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Desk</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Chair</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>TV Console</Text>
                            </View>
                        </TouchableOpacity>
                    </>

                )}

                {/* //Office room dropdown */}
                <TouchableOpacity style={styles.menuItem} onPress={toggleOutdoor}>
                    <Icon name="briefcase" size={25} color="#ffffff" />
                    <Text style={styles.text}>Outdoor</Text>
                    <Icon name={outdoorOpen ? "angle-up" : "angle-down"} size={25} color="#ffffff" style={{marginLeft: 'auto'}}/>
                </TouchableOpacity>

                {outdoorOpen && (
                    <>
                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Desk</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>Chair</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropDown}>
                            <View  style={styles.subDropdown}>
                                <Text style={styles.dropDownText}>TV Console</Text>
                            </View>
                        </TouchableOpacity>
                    </>

                )}


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