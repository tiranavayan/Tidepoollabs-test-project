import React from 'react';
import { Image, StyleSheet } from 'react-native';

const TabIcon = ({ icon, iconActive, focused }) => {
  return <Image style={styles.tabIcon} source={focused ? iconActive : icon} />;
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 37,
    height: 37,
  },
});

export default TabIcon;
