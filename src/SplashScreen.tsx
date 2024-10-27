import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated } from 'react-native';

const SplashScreen = ({ onFadeComplete }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,           // Fade to opacity 0
      duration: 500,       // 1 second fade duration
      delay: 4000,          // 2-second delay before fading
      useNativeDriver: true,
    }).start(onFadeComplete); // Call onFadeComplete after animation
  }, [fadeAnim, onFadeComplete]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground
        source={require('../assets/images/splash.jpg')}
        style={styles.background}
        resizeMode="cover" 
      >
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>
            Welcome to <Text style={styles.innerText}>Furnistore!</Text>
          </Text>
          <Text style={styles.quote}>
            "Good design is a balance of beauty and function. The right furniture transforms a space, making it not just a room but a reflection of who you are"
          </Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 110,
  },
  welcomeText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  quote: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 15,
  },
  innerText: {
    color: '#FF7724',
  },
});

export default SplashScreen;
