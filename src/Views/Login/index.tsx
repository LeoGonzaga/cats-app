import React from 'react';
import {ImageBackground, Text} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import Background from '../../Assets/background.png';
import CatsLogo from '../../Assets/Logo.png';

interface Theme {
  theme?: {
    background?: string;
  };
}

const Container = styled.ImageBackground`
  background-color: ${(props: Theme) => props.theme?.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  margin: 30px 0;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 58px;
  background-color: #fff;
  border-radius: 14px;
  margin: 10px 0px;
  font-size: 20px;
  padding: 15px;
`;

const ButtonAction = styled(RectButton)`
  width: 90%;
  height: 58px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const TitleButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const Login: React.FC = () => {
  return (
    <Container source={Background}>
      <Logo source={CatsLogo} />
      <Input placeholder="Digite seu CPF" />
      <Input placeholder="Digite sua senha" />
      <ButtonAction>
        <TitleButton>Entrar</TitleButton>
      </ButtonAction>
    </Container>
  );
};

export default Login;
