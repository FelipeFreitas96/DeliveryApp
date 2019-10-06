import styled from 'styled-components';

const Body = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  background-color: #f6f8fc;
`;

const Text = styled.Text`
  font-family: Nunito-Bold;
  color: #6b7587;
  text-align: center;
`;

const InputView = styled.View`
  width: 100%;
`;

const TextInput = styled.TextInput`
  text-align: center;
  background-color: white;
  color: #6b7587;
`;

const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => props.status == "big" ? '#2a7ef6' : '#f69e2a'};
  height: ${(props) => props.status == "big" ? 200 : 50};
  justify-content: center;
`;

const TouchableText = styled(Text)`
  font-size: ${(props) => props.status == "big" ? 30 : 15};
  color: white;
`;

export { Body, TextInput, InputView, Text, TouchableOpacity, TouchableText };
