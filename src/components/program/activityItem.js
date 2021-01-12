import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const ActivityItem = ({ item }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: item.image }}
      style={styles.image}
    />
    <View style={styles.textWrapper}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode={'tail'}>
        {item.description}
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
    marginHorizontal: 10,
  },
  textWrapper: {
    width: width - 95,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text: {
    color: '#ccc',
    fontSize: 15,
  },
});

export default ActivityItem;
