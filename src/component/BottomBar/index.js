import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { BottomBarImage, Button, ButtonView, Image, SafeView } from '~/component/BottomBar/style.js';

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightButton: 0,
    };
  }

  onPageLayout({nativeEvent}) {
    if(this.state.heightButton == 0) {
      this.setState({ heightButton: nativeEvent.layout.height + 3 });
    }
  }

  navigateSwitch(name) {
    const { navigation } = this.props;
    navigation.navigate(name);
  }

  render() {
    const { heightButton } = this.state;
    const {
      renderIcon,
      activeTintColor,
      inactiveTintColor,
      onTabPress,
      onTabLongPress,
      navigation,
    } = this.props;
    const { routes, index: activeRouteIndex } = navigation.state;
    return (
      <SafeView>
        <Image onLayout={(obj) => this.onPageLayout(obj)} source={BottomBarImage} />
        <ButtonView>
          {routes.map((route, routeIndex) => {
            const isRouteActive = routeIndex === activeRouteIndex;
            const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
            if(route.key == "AddButton") {
              return (
                <Button heightButton={heightButton} style={{ bottom: 31, left: 0 }}>
                  <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => { navigation.navigate('Add') }}
                    onLongPress={() => { onTabLongPress({ route }); }}>
                    {renderIcon({ route, focused: isRouteActive, tintColor })}
                  </TouchableOpacity>
                </Button>
              );
            } else {
              return (
                <Button heightButton={heightButton}>
                  <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => { onTabPress({ route }) }}
                    onLongPress={() => { onTabLongPress({ route }); }}>
                    {renderIcon({ route, focused: isRouteActive, tintColor })}
                  </TouchableOpacity>
                </Button>
              );
            }
          })}
        </ButtonView>
      </SafeView>
    );
  }
}

export default BottomBar;
