import React from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default LessonItem = ({ item }) => (
  <View style={{
    borderRadius: 7,
    overflow: 'hidden',
    width: (width - 30) / 2.5,
    height: (width - 30) / 2,
    backgroundColor: 'blue',
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 0,
    elevation: 3,
  }}>
    <ImageBackground
      source={{ uri: 'https://picsum.photos/200/300' }}
      imageStyle={{ resizeMode: 'cover' }}
      style={{ flex: 1 }}
    >
      <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
        {item.number}
      </Text>
      <Text style={{ color: 'white', fontSize: 17, marginTop: 5, textAlign: 'center' }}>
        {item.title}
      </Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({

});