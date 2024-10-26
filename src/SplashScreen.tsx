import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bed2.jpg')}
      style={styles.container}
      resizeMode="cover" 
    >
        
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome to <Text style={styles.innerText}>Furnistore!</Text></Text>
        <Text style={styles.quote}>"Good design is a balance of beauty and function. The right furniture transforms a space, making it not just a room but a reflection of who you are"</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 15
  },
  innerText: {
    color: '#FF7724'
  }
});

export default SplashScreen;
