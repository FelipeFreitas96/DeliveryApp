import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TopBar from '~/component/TopBar';
import OrderItem from '~/component/OrderItem';
import api from '~/services/api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedTab: 0,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const code = navigation.getParam('code', '');
    const name = navigation.getParam('name', '');
    if(code != "" && name != "") {"LB249898686SE"
      this.addProduct({
        id: code,
        name: name,
      });
    }
  }

  getProductTabID(request) {
    const evento = request.evento[0];
    if(evento) {
      if(evento.tipo == "BDE" && evento.status == "01") {
        return 1;
      }
    }
    return 3;
  }

  async addProduct({id, name}) {
    const request = await this.requestCorreiosData(id);
    const {data} = this.state;
    this.setState({
      data: [...data, {id, name, request, tab: this.getProductTabID(request) }]
    });
  }

  async requestCorreiosData(id) {
    var config = {headers: {"Content-Type": "text/xml"}};
    var xmlData = `
      <rastroObjeto>
        <usuario>ECT</usuario>
        <senha>SRO</senha>
        <tipo>L</tipo>
        <resultado>T</resultado>
        <objetos>${id}</objetos>
        <lingua>101</lingua>
        <token></token>
      </rastroObjeto>
    `;
    const {request} = await api.post('', xmlData, config);
    const {objeto} = JSON.parse(request._response);
    return objeto[0];
  }

  selectTab(index) {
    this.setState({ selectedTab: index });
  }

  render() {
    let {data, selectedTab} = this.state;
    data = data.filter((obj) => obj.tab == selectedTab || selectedTab == 0);
    return (
      <View style={{ flex: 1, backgroundColor: '#f6f8fc' }}>
        <TopBar selectedTab={selectedTab} selectTab={(index) => this.selectTab(index)}/>
        <FlatList
          style={{padding: 10}}
          data={data}
          renderItem={(item) => <OrderItem {...item}/>}
        />
      </View>
    );
  }
}

export default MainPage;
