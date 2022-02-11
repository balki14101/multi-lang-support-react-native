import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import LottieView from 'lottie-react-native';
import Logo from '../../assets/72260-smile-face-splash-screen.json';
import Splash from '../../assets/pbLoaderIcon.json';
import SplashVarient from '../../assets/pbLoader.json';

import App from '../../App';

const splash = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  function logo() {
    return (
      <>
        <LottieView source={Splash} autoPlay loop />
      </>
    );
  }
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      //   logoImage={Splash}
      customComponent={logo()}
      backgroundColor={'#000000'}
      logoHeight={300}
      logoWidth={300}>
      <App />
    </AnimatedSplash>
  );
};

export default splash;
