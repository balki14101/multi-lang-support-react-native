import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Logo from '../../assets/72260-smile-face-splash-screen.json';
import Splash from '../../assets/splash.png';

import App from '../../App';

const splash = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={Splash}
      backgroundColor={'#808080'}
      logoHeight={300}
      logoWidth={300}>
      <App />
    </AnimatedSplash>
  );
};

export default splash;
