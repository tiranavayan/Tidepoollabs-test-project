import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const { width } = Dimensions.get('window');

const LessonItem = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={'#fff'} />
  </View>
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
  }
});

export default LessonItem;
