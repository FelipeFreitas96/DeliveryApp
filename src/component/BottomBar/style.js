import { SafeAreaView, Dimensions } from 'react-native';
import styled from 'styled-components';

const { width } = Dimensions.get('window');
const SafeView = styled(SafeAreaView).attrs({
  forceInset: {
    bottom: 'always',
    top: 'never',
  }
})`
  height: 108;
  backgroundColor: #f6f8fc;
`;

const BottomBarImage = require('~/images/bottom_bar_background.png');
const ButtonView = styled.View`
  position: absolute;
  flex-direction: row;
  flex: 1;
`;

const Image = styled.Image`
  margin-left: -31px;
`;

const Button = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${width / 5}px;
  height: ${props => props.heightButton};
`;

export { BottomBarImage, Button, ButtonView, Image, SafeView };
