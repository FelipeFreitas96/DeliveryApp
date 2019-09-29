import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import LinearGradient from 'react-native-linear-gradient';

import PackageSVG from '~/images/package.svg';
import MapSVG from '~/images/map.svg';
import PlusCircleSVG from '~/images/plus-circle.svg';
import UserSVG from '~/images/user.svg';
import SettingsSVG from '~/images/settings.svg';
import BottomBar from '~/images/bottom_bar_background.svg';
import Main from '~/pages/Main';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);
const style = StyleSheet.create({
  insertView: {
    marginTop: -80,
    width: 50,
    height: 40,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    transform: [{
      scaleX: 2,
      scaleY: 3.2,
    }]
    // marginTop: -40,
    // width: 52,
    // height: 52,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 100,
  },
});

class TabBar extends React.Component {
  render() {
    const {
       navigation,
       jumpToIndex,
       getButtonComponent,
    } = this.props;
    const {
       routes
    } = navigation.state;
    return (
       <SafeAreaView forceInset={{ top: 'always' }}>
          <View>
            {routes && routes.map((route, index) => {

              const Tomponent = this.props.getButtonComponent({route});

              return <Tomponent key={index}/>;
            })}
          </View>
        </SafeAreaView>
      );
    }
 }

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
    screen: Main,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MapSVG width={24} height={24} color={focused ? '#2b7ef6' : 'black'} />
      ),
    }
  },
  Insert: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <View/>

        // <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['#39b9fe', '#2d89f7']} style={style.insertView}>
        //   <PlusCircleSVG width={24} height={24} color={focused ? '#2b7ef6' : 'white'} />
        // </LinearGradient>
      ),
    }
  },
  User: {
    screen: Main,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <UserSVG width={24} height={24} color={focused ? '#2b7ef6' : 'black'} />
      ),
    }
  },
  Settings: {
    screen: Main,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <SettingsSVG width={24} height={24} color={focused ? '#2b7ef6' : 'black'} />
      ),
    }
  },
}, {
  defaultNavigationOptions: {
    headerForceInset: {
        top: 'never',
        bottom: 'never',
    },
    tabBarComponent: props => (
      <React.Fragment>
        <BottomTabBar {...props}   />
        <SafeAreaView style={{ marginTop: -110 }} forceInset={{
          top: 'never',
          bottom: 'always', }}>
          <BottomBar width={null} color={} />
        </SafeAreaView>
      </React.Fragment>
    ),
    tabBarOptions: {
      showLabel: false,
    },
  }
});

const Routes = createAppContainer(bottomNavigator);

export default Routes;
