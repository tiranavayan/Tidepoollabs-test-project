import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const { width } = Dimensions.get('window');

const LoadMoreActivity = ({ show }) => (
  <>
    {show ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={'#fff'} />
      </View>
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
  emptyComponent: {
    marginBottom: 110,
  },
});

export default LoadMoreActivity;
