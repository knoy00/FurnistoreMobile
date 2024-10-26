import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../src/SplashScreen';
import HomeScreen from '../src/HomeScreen';
import ImageData from '../src/Data/ImageData';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading process (like fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the splash screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <NavigationContainer independent={true}>
      {isLoading ? <SplashScreen /> : <HomeScreen />}
    </NavigationContainer>
  );
};

export default Layout;
