import React from 'react';
import { Image } from 'react-native';

export default TabIcon = ({ icon, iconActive, focused }) => {
  return (
    <Image
      style={{ width: 37, height: 37 }}
      source={focused ? iconActive : icon}
    />
  )
};