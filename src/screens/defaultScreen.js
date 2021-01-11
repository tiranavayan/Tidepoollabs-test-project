import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet
} from 'react-native';
const backgroundImage = require('src/assets/images/background.jpg');

export default DefaultScreen = ({ title }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
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