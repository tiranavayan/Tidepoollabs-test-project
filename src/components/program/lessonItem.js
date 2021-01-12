import React from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';

const background = require('src/assets/images/lessonItem.png');
const { width } = Dimensions.get('window');

export default LessonItem = ({ item }) => (
  <View style={styles.container}>
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: 'cover' }}
      style={styles.ImageBackground}
    >
      <Text style={styles.numberText}>
        {item.number}
      </Text>
      <Text style={styles.titleText}>
        {item.title}
      </Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden',
    width: (width - 30) / 2.5,
    height: (width - 30) / 2,
    marginLeft: 10,
  },
  ImageBackground: {
    flex: 1
  },
  numberText: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center'
  }
});