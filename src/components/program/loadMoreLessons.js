import React from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

const loadIcon = require('src/assets/icons/refresh.png');
 const LessonItem = () => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {}}
    activeOpacity={0.5}>
    <Text style={styles.text}>Load more lessons</Text>
    <Image source={loadIcon} style={styles.image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden',
    width: (width - 30) / 2.5,
    height: (width - 30) / 2,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#ccc',
    fontSize: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default LessonItem;
