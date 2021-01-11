import React from 'react';
import { Image } from 'react-native';

export default TabIcon = ({ icon, focused }) => {
  return (
    <Image
      style={{ width: focused ? 50 : 40, height: focused ? 50 : 40 }}
      source={icon}
    />
  )
};