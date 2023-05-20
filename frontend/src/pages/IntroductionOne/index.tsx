import React, { useState } from 'react';
import { BackgroundImage, Container, IntroductionImage, ImageWrapper, ContainerLogo, ImageLogo, TextIntroduction, Wave, TitleText} from "./styles";
import { Image, Text, View } from 'react-native';
import { Weight700 } from '../../../globalStyles';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroductionButton from '../../components/SliderButton';
import SliderButton from '../../components/SliderButton';




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
  const [showScreen, setShowScreen] = useState(false);

  const renderSlides = ({ item }: {item: Item}) => {
      if(Object.keys(item).length == 7) {
        return (
          <Container>
            <BackgroundImage source={require('../../assets/HomeScreens/greenElipse.png')}>
              <ImageWrapper>
                <Image style={{width: item.width, height: item.height}} source={item.image}></Image>
              </ImageWrapper>
            </BackgroundImage>
            <ContainerLogo>
              <ImageLogo source={item.logo} />
              {item.title}
              {item.text}
            </ContainerLogo>
          </Container>
        );
      } else if (Object.keys(item).length == 6) {
        return (
          <Container>
            <BackgroundImage source={require('../../assets/HomeScreens/greenElipse.png')}>
              <ImageWrapper>
                <Image style={{width: item.width, height: item.height}} source={item.image}></Image>
              </ImageWrapper>
            </BackgroundImage>
            <ContainerLogo>
              {item.title}
              {item.text}
            </ContainerLogo>
          </Container>
        );
      } else {
        return (
          <Container>
            <BackgroundImage source={require('../../assets/HomeScreens/greenElipse.png')}>
              <ImageWrapper>
                <Image style={{width: item.width, height: item.height, transform: [{ scale: 0.8 }]}} source={item.image}></Image>
              </ImageWrapper>
            </BackgroundImage>
            <ContainerLogo>
              {item.title}
              <SliderButton labelButton='JUNTE-SE A NÓS' onPress={() => console.log("Alou")} />
            </ContainerLogo>
          </Container>
        );
      }
      
}
    if(showScreen) {
      return <Text>Olá</Text>
    } else {
      return(
          <AppIntroSlider 
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
              backgroundColor: '#43927C',
              width: 17
            }}
            />
      ); 
    }
    


}