import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';
import Tabs from 'src/constants/tabs';
import { TabIcon } from 'src/components/ui';
import { DefaultScreen, ProgramScreen } from 'src/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Program"
        backBehavior="none"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'rgba(255,255,255, 0.5)',
          labelStyle: {
            fontSize: 14,
          },
          style: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: DeviceInfo.hasNotch() ? 130 : 100,
          },
          tabStyle: {
            backgroundColor: 'rgba(0,0,0, 0.8)',
            paddingBottom: 14,
          },
        }}
        screenOptions={{
          headerShown: false,
        }}>
        {Tabs()?.map((value) => (
          <Tab.Screen
            key={value?.name}
            name={value?.name}
            component={value.name === 'Program' ? ProgramScreen : DefaultScreen}
            options={{
              unmountOnBlur: false,
              tabBarLabel: value.name,
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  icon={value.icon}
                  iconActive={value.iconActive}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
