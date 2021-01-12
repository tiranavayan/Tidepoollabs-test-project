import React from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
const backgroundImage = require('src/assets/images/background.jpg');

const DefaultScreen = () => {
  return (
    <View style={styles.appContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
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
