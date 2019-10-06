import React, { Component } from 'react';
import { Body, TextInput, InputView, Text, TouchableOpacity, TouchableText } from './style.js';

class AddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      name: '',
    };
  }

  sendForm() {
    const { code, name } = this.state;
    const { navigation } = this.props;

    navigation.navigate('Main', {
      code, name
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Body>
        <InputView>
          <Text>Qual o código de rastreio?</Text>
          <TextInput onChangeText={(text) => this.setState({ code: text })}/>
        </InputView>
        <InputView>
          <Text>Escreva o nome do pacote</Text>
          <TextInput onChangeText={(text) => this.setState({ name: text })}/>
        </InputView>
        <InputView>
          <TouchableOpacity status={"big"}>
            <TouchableText status={"big"} onPress={() => this.sendForm()}>Salvar</TouchableText>
          </TouchableOpacity>
          <TouchableOpacity status={"small"}>
            <TouchableText status={"small"} onPress={() => navigation.navigate('Main')}>Voltar</TouchableText>
          </TouchableOpacity>
        </InputView>
      </Body>
    );
  }
}

export default AddPage;
