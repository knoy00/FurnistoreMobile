import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../src/SplashScreen';
import HomeScreen from '../src/HomeScreen';
import Menu from '../src/SideMenu';
import Cart from '../src/Cart';
import ItemOverview from '@/src/ItemOverview';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {RootStackParamList} from '../src/Types';

const Layout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const [isLoading, setIsLoading] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useState(new Animated.Value(-300))[0]; // Starts off-screen

  useEffect(() => {
    Animated.timing(menuAnimation, {
      toValue: menuVisible ? 0 : -400, // Adjust based on your menu width
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  const handleFadeComplete = () => {
    setIsLoading(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const addToCart = (item) => {
    // Implement the logic to add the item to the cart here
    console.log("Item added to cart:", item);
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Splash Screen */}
        {isLoading ? (
          <Stack.Screen name="Splash">
            {() => <SplashScreen onFadeComplete={handleFadeComplete} />}
          </Stack.Screen>
        ) : (
          <>
            {/* Home Screen */}
            <Stack.Screen name="Home">
              {() => (
                <View style={{ flex: 1 }}>
                  {/* Menu Side Bar */}
                  <Animated.View style={[styles.menuContainer, { transform: [{ translateX: menuAnimation }] }]}>
                    <Menu />
                  </Animated.View>

                  {/* Main Content */}
                  <HomeScreen onHamburgerPress={toggleMenu} />

                  {/* Overlay to close menu when clicked outside */}
                  {menuVisible && (
                    <TouchableWithoutFeedback onPress={toggleMenu}>
                      <View style={styles.overlay} />
                    </TouchableWithoutFeedback>
                  )}
                </View>
              )}
            </Stack.Screen>

            {/* Cart Screen */}
            <Stack.Screen name="Cart" component={Cart} />

            {/* ItemOverview Screen */}
            <Stack.Screen name="ItemOverview" component={ItemOverview} addToCart={addToCart}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: '#faf4f0',
    zIndex: 1,
  },
  mainContent: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
  },
});
