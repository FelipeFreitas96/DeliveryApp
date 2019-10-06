import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LinearGradient from 'react-native-linear-gradient';
import BottomBar from '~/component/BottomBar';
import PackageSVG from '~/images/package.svg';
import MapSVG from '~/images/map.svg';
import PlusCircleSVG from '~/images/plus-circle.svg';
import UserSVG from '~/images/user.svg';
import SettingsSVG from '~/images/settings.svg';

import Add from '~/pages/Add';
import Main from '~/pages/Main';
import Map from '~/pages/Map';
import User from '~/pages/User';
import Settings from '~/pages/Settings';

const bottomNavigator = createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <PackageSVG width={24} height={24} color={focused ? '#2b7ef6' : 'black'} />
      ),
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MapSVG width={24} height={24} color={focused ? '#2b7ef6' : 'black'} />
      ),
    }
  },
  AddButton: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['#39b9fe', '#2d89f7']}
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PlusCircleSVG width={24} height={24} color={focused ? '#2b7ef6' : 'white'} />
        </LinearGradient>
      ),
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <UserSVG width={24} height={24} color={focused ? '#2b7ef6' : 'black'} />
      ),
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <SettingsSVG width={24} height={24} color={focused ? '#2b7ef6' : 'black'} />
      ),
    }
  },
}, {
  defaultNavigationOptions: {
    tabBarComponent: props => (
      <BottomBar {...props} />
    ),
    tabBarOptions: {
      showLabel: false,
    },
  }
});

const switchNavigator = createSwitchNavigator({
  bottomNavigator,
  Add,
})

const Routes = createAppContainer(switchNavigator);

export default Routes;
