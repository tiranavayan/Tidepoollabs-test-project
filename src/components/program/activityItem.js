import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default ActivityItem = ({ item }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://picsum.photos/200/300' }}
      style={styles.image}
    />
    <View>
      <Text style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.text}>
        {item.text}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    width: width - 20,
    height: 75,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginLeft: 10,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    marginHorizontal: 10
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  text: {
    color: '#ccc',
    fontSize: 15
  }
});