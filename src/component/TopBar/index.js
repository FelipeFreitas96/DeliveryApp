import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header, TopRow, TopRowFirst, TopRowMiddle, TopRowLast } from '~/component/TopBar/style.js';

import MenuSVG from '~/images/menu.svg';
import TruckSVG from '~/images/truck.svg';
import FilterSVG from '~/images/filter.svg';

const style = StyleSheet.create({
  menu: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  menuText: {
    margin: 20,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#36383b',
  },
  svg: {
    width: 24,
    height: 24,
    color: 'black',
    margin: 12,
    marginTop: 35,
  },
});

const TOP_BAR_VIEW_MODE = [
  "Todos",
  "Entregues",
  "Arquivados",
  "Pendentes",
];

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { selectedTab, selectTab } = this.props;
    const selected = { color: '#2b7ef6', borderBottomColor: '#2b7ef6', borderBottomWidth: 2, paddingBottom: 5 };

    return (
      <Header>
        <TopRow>
          <TopRowFirst>
            <MenuSVG style={style.svg}/>
          </TopRowFirst>
          <TopRowMiddle>
            <TruckSVG style={style.svg}/>
          </TopRowMiddle>
          <TopRowLast>
            <FilterSVG style={style.svg}/>
          </TopRowLast>
        </TopRow>
        <ScrollView
          style={style.menu}
          horizontal={true}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {TOP_BAR_VIEW_MODE.map((name, index) => (
            <TouchableOpacity onPress={() => selectTab(index)}>
              <Text style={[style.menuText, selectedTab == index && selected]}>{name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Header>
    );
  }
}

export default TopBar;
