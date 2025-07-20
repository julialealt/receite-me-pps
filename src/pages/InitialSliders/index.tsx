import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackgroundImage, Container, ImageWrapper, ContainerLogo, ImageLogo, TextIntroduction, TitleText, ContainerButton } from "./styles";
import { Image, Text, ScrollView } from 'react-native';
import { Weight700 } from '../../../globalStyles';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from '../../components/Button';
import { propsStack } from '../../routes/Models';

const slides: Item[] = [
  {
    key: '1',
    title: <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 35 }}>Receite<Weight700>.Me</Weight700></Text>,
    logo: require('../../assets/logo/logoBlack.png'),
    text: <TextIntroduction>O seu app favorito de receitas!</TextIntroduction>,
    image: require('../../assets/HomeScreens/introductionOne.png'),
    width: 400,
    height: 310,
  },
  {
    key: '2',
    title: <TitleText>Faça suas receitas favoritas</TitleText>,
    text: <TextIntroduction>Encontre receitas com os ingredientes que você tem em casa</TextIntroduction>,
    image: require('../../assets/HomeScreens/introductionTwo.png'),
    width: 390,
    height: 226,
  },
  {
    key: '3',
    title: <TitleText>Acompanhamento nutricional</TitleText>,
    text: <TextIntroduction>Saiba quantas calorias e macronutrientes você ingeriu</TextIntroduction>,
    image: require('../../assets/HomeScreens/introductionThree.png'),
    width: 400,
    height: 338,
  },
  {
    key: '4',
    title: <TitleText>Vamos cozinhar!</TitleText>,
    image: require('../../assets/HomeScreens/introductionFour.png'),
    width: 460,
    height: 500,
  }
]
interface Item {
  key: string,
  title: JSX.Element,
  logo?: string,
  text?: JSX.Element,
  image: any,
  width: number,
  height: number,
}

export default function InitialSliders() {
  const [showScreen, setShowScreen] = useState(false);
  const navigation = useNavigation<propsStack>();

  const renderSlides = ({ item }: { item: Item }) => {
    if (Object.keys(item).length == 7) {
      return (
        <ScrollView>
          <Container>
            <BackgroundImage source={require('../../assets/HomeScreens/greenElipse.png')}>
              <ImageWrapper>
                <Image style={{ width: item.width, height: item.height }} source={item.image}></Image>
              </ImageWrapper>
            </BackgroundImage>
            <ContainerLogo>
              <ImageLogo source={item.logo} />
              {item.title}
              {item.text}
            </ContainerLogo>
          </Container>
        </ScrollView>
      );
    } else if (Object.keys(item).length == 6) {
      return (
        <ScrollView>
          <Container>
            <BackgroundImage source={require('../../assets/HomeScreens/greenElipse.png')}>
              <ImageWrapper>
                <Image style={{ width: item.width, height: item.height }} source={item.image}></Image>
              </ImageWrapper>
            </BackgroundImage>
            <ContainerLogo>
              {item.title}
              {item.text}
            </ContainerLogo>
          </Container>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <Container>
            <BackgroundImage source={require('../../assets/HomeScreens/greenElipse.png')}>
              <ImageWrapper>
                <Image style={{ width: item.width, height: item.height, transform: [{ scale: 0.8 }] }} source={item.image}></Image>
              </ImageWrapper>
            </BackgroundImage>
            <ContainerButton>
              {item.title}
              <Button labelButton='JUNTE-SE A NÓS' onPress={() => navigation.navigate('SignUp')} width={290} height={65} radius={20} />
            </ContainerButton>
          </Container>
        </ScrollView>
      );
    }

  }
  if (showScreen) {
    return <Text>Olá</Text>
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        activeDotStyle={{
          backgroundColor: '#43927C',
          width: 17
        }}
      />
    );
  }



}