import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import OrderItem from '~/component/OrderItem';
import api from '~/services/api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.addProduct({
      id: "LB249898686SE",
      name: "GTX 950",
    });
  }

  async addProduct({id, name}) {
    const request = await this.requestCorreiosData(id);
    const {data} = this.state;
    this.setState({
      data: [...data, {id, name, request}]
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

  render() {
    const {data} = this.state;
    return (
      <View>
        <FlatList style={{padding: 10}} data={data} renderItem={(item) => <OrderItem {...item}/>}/>
      </View>
    );
  }
}

export default MainPage;
