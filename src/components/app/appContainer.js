import React from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const AppContainer = ({ children }) => {
  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.containerWrapper}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'transparent'}
          translucent={true}
        />
        {children}
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
});

export default AppContainer;
