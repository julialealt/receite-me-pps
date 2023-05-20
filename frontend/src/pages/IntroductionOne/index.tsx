import React, { useState } from 'react';
import { BackgroundImage, Container, IntroductionImage, ImageWrapper, ContainerLogo, ImageLogo, TextIntroduction, Wave, TitleText} from "./styles";
import { Image, Text, View } from 'react-native';
import { Weight700 } from '../../../globalStyles';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroductionButton from '../../components/SliderButton';
import SliderButton from '../../components/SliderButton';

interface Item {
  key: string,
  title: JSX.Element,
  logo?: string,
  text?: JSX.Element,
  image: any,
  width: string,
  height: string,
}


const slides: Item[] = [
  {
    key: '1',
    title: <Text style={{fontSize: 35}}>Receite<Weight700>.Me</Weight700></Text>,
    logo: require('../../assets/logo/logoBlack.png'),
    text: <TextIntroduction>O seu app favorito de receitas!</TextIntroduction>,
    image: require('../../assets/HomeScreens/introductionOne.png'),
    width: '400px',
    height: '310px',
  },
  {
    key: '2',
    title: <TitleText>Faça suas receitas favoritas</TitleText>,
    text: <TextIntroduction>Encontre receitas com os ingredientes que você tem em casa</TextIntroduction> ,
    image: require('../../assets/HomeScreens/introductionTwo.png'),
    width: '390px',
    height: '226px',
  },
  {
    key: '3',
    title: <TitleText>Acompanhamento nutricional</TitleText>,
    text: <TextIntroduction>Saiba quantas calorias e macronutrientes você ingeriu</TextIntroduction> ,
    image: require('../../assets/HomeScreens/introductionThree.png'),
    width: '400px',
    height: '338px',
  },
  {
    key: '4',
    title: <TitleText>Vamos cozinhar!</TitleText>,
    image: require('../../assets/HomeScreens/introductionFour.png'),
    width: '460px',
    height: '500px',
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