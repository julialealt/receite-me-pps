import React from 'react';
import { BackgroundImage, Container, IntroductionImage, ImageWrapper, ContainerLogo, ImageLogo, TextLogo, TextIntroduction } from "./styles";
import { Text } from 'react-native';

export default function IntroductionOne() {
  return (
    <Container>
      <BackgroundImage source={require('../../assets/HomeScreens/green-elipse.svg')}>
        <ImageWrapper>
          <IntroductionImage source={require('../../assets/HomeScreens/introduction one.svg')} />
        </ImageWrapper>
      </BackgroundImage>
      <ContainerLogo>
        <ImageLogo source={require('../../assets/logo/logo black.svg')} />
        <Text style={{fontSize: 35}}>Receite<TextLogo>.Me</TextLogo></Text>
        <TextIntroduction>O seu app favorito de receitas!</TextIntroduction>
      </ContainerLogo>
    </Container>
  );
}