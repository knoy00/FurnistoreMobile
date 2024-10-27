import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../src/SplashScreen';
import HomeScreen from '../src/HomeScreen';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Callback to handle fade completion
  const handleFadeComplete = () => {
    setIsLoading(false);
  };

  return (
    <NavigationContainer independent={true}>
      {isLoading ? (
        <SplashScreen onFadeComplete={handleFadeComplete} />
      ) : (
        <HomeScreen />
      )}
    </NavigationContainer>
  );
};

export default Layout;
