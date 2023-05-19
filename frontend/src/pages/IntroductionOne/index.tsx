import React from 'react';
import { BackgroundImage, Container, IntroductionImage, ImageWrapper, ContainerLogo, ImageLogo, TextIntroduction, Wave} from "./styles";
import { Text, View } from 'react-native';
import { Weight700 } from '../../../globalStyles';

const slides = [
  {
      key: '1',
      title: 'Receite.Me',
      logo: '../../assets/logo/logoBlack.png',
      text: 'o seu app favorito de receitas!'
  },
  {
      key: '2',
      title: 'Faça suas receitas favoritas',
      text: 'Encontre receitas com os ingredientes que você tem em casa'
  },
  {
      key: '3',
      title: 'Acompanhamento nutricional',
      text: 'Saiba quantas calorias e macronutrientes você ingeriu'
  },
  {
    key: '4',
    title: 'Vamos cozinhar!',
}
]

export default function IntroductionOne() {
  return (
    <View>
      <Container>
        <BackgroundImage source={require('../../assets/HomeScreens/greenElipse.png')}>
          <ImageWrapper>
            <IntroductionImage source={require('../../assets/HomeScreens/introductionOne.png')} />
          </ImageWrapper>
        </BackgroundImage>
        <ContainerLogo>
          <ImageLogo source={require('../../assets/logo/logoBlack.png')} />
          <Text style={{fontSize: 35}}>Receite<Weight700>.Me</Weight700></Text>
          <TextIntroduction>O seu app favorito de receitas!</TextIntroduction>
        </ContainerLogo>
        <Wave source={require("../../assets/HomeScreens/wave.png")}/>
      </Container>
    </View>
  );
}