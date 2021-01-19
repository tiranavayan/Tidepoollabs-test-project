import React from 'react';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';

import { AppContainer } from 'src/components/app';

const backgroundImage = require('src/assets/images/background.jpg');

const DefaultScreen = () => {
  return (
    <AppContainer>
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }} />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DefaultScreen;
