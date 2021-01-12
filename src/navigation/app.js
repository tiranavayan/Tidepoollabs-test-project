import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from 'src/constants/tabs';
import { TabIcon } from 'src/components/ui';
import { DefaultScreen, ProgramScreen } from 'src/screens';

const Tab = createBottomTabNavigator();
console.disableYellowBox = true;

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Program"
        backBehavior="none"
        tabBarOptions={{
          activeTintColor: 'rgba(255,255,255, 1)',
          inactiveTintColor: 'rgba(255,255,255, 0.5)',
          labelStyle: {
            fontSize: 16,
          },
          style: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 100
          },
          tabStyle: {
            backgroundColor: 'rgba(0,0,0, 0.5)',
            paddingBottom: 10,
          },
        }}
        screenOptions={{
          headerShown: false
        }}
      >
        {Tabs().map((value) => (
          <Tab.Screen
            key={value.name}
            name={value.name}
            component={() => (
              value.name === 'Program' ? (
                <ProgramScreen />
              ) : (
                  <DefaultScreen title={value.name} />
                )
            )}
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
}

export default App;
