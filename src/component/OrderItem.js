import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import PackageSVG from '~/images/package.svg';
import TruckSVG from '~/images/truck.svg';

const DELIVERY_STATUS = {
  "01": {progress: 0.3, color: '#2b7ef6', icon: PackageSVG},
  "18": {progress: 0.4, color: "red", icon: TruckSVG},
  "10": {progress: 0.5, color: "yellow", icon: TruckSVG},
};

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.0,
    };

    for (const obj of props.item.request.evento) {
      try {
        const {progress, color} = DELIVERY_STATUS[obj.status];
        if(this.state.progress < progress) {
          this.state.progress = progress;
          this.state.color = color;
        } else {
          this.state.color = color;
        }
      } catch(err) {}
    }
  }

  getWeekendBetweenDates(start, end) {
    var count = 0;
    while(start < end) {
      if(start.isoWeekday() === 6 || start.isoWeekday() === 7)
        count++;
      start = moment(start, 'DD/MM/YYYY').add('days', 1)
    }
    return count;
  }

  getTimeDiff(event) {
    const start = moment(event[0].dataPostagem, "DD/MM/YYYY");
    const end = moment(event[0].data, "DD/MM/YYYY");
    const diff = moment.duration(end.diff(start)).asDays();
    const bussiness = diff - this.getWeekendBetweenDates(start, end);

    return { diff, bussiness };
  }

  getEvento(id) {
    const {item} = this.props;
    const evento = item.request.evento;
    if(id == 'first') {
      return evento[0];
    } else if(id == 'last') {
      return evento[evento.length - 1];
    }
    return evento[id];
  }

  getProgress() { return this.state.progress; }
  getColor() { return this.state.color; }

  getOrderFrom() {
    const {unidade} = this.getEvento('last');
    return unidade.local;
  }

  getDescription() {
    const {descricao} = this.getEvento('first');
    return descricao;
  }

  getOrderTo() {
    const {unidade} = this.getEvento('first');
    return unidade.local;
  }

  getOrderType() {
    const {status} = this.getEvento('first');
    return status;
  }

  render() {
    const {item} = this.props;
    const {diff, bussiness} = this.getTimeDiff(item.request.evento);
    return (
      <View key={item.key}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <View style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
            <PackageSVG width={32} height={32} color={this.getColor()} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{fontFamily: 'Nunito-Bold', color: '#36383b', fontSize: 16}}>{item.name}</Text>
            <Text style={{fontFamily: 'Nunito-Regular', color: this.getColor()}}>{this.getDescription()}</Text>
            <Text style={{fontFamily: 'Nunito-Regular', color: '#6b7587'}}>({diff} dias corridos / {bussiness} dias úteis)</Text>
          </View>
        </View>
        <View style={{margin: 10, marginTop: 0}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1, fontFamily: 'Nunito-Regular', color: '#6b7587'}}>{this.getOrderFrom()}</Text>
            <Text style={{fontFamily: 'Nunito-Regular', color: '#6b7587'}}>{this.getOrderTo()}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Progress.Bar style={{backgroundColor: '#6b7587'}} color={'#2a7ef6'} progress={this.getProgress()} borderWidth={0} width={null} />
          </View>
        </View>
      </View>
    );
  }
}

export default OrderItem;
