import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const loadIcon = require('src/assets/icons/refresh.png');

const LoadMoreActivity = ({ onPress, showMore }) => (
  <>
    {showMore ? (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.5}>
        <Text style={styles.text}>Load more activities</Text>
        <Image source={loadIcon} style={styles.image} />
      </TouchableOpacity>
    ) : (
      <View style={styles.emptyComponent} />
    )}
  </>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    width: width - 20,
    height: 75,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginLeft: 10,
    marginBottom: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ccc',
    fontSize: 15,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  emptyComponent: {
    marginBottom: 110,
  },
});

export default LoadMoreActivity;
