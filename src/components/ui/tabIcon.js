import React from 'react';
import { Image } from 'react-native';

export default TabIcon = ({ icon, iconActive, focused }) => {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={focused ? iconActive : icon}
    />
  )
};