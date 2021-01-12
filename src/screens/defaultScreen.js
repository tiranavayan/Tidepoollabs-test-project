import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
const backgroundImage = require('src/assets/images/background.jpg');

const DefaultScreen = () => {
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
  },
});

export default DefaultScreen;
