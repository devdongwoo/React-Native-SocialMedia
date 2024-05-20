import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Routes} from './Routes';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import ProfileTabTitle from '../components/profileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/profileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'tab1'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle isFocused={focused} title={'Photos'} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'tab2'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle isFocused={focused} title={'Videos'} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'tab3'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle isFocused={focused} title={'Saved'} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

export function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
}
