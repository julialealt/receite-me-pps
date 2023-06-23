import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* margin-top: ${Dimensions.get('window').height - 741}px; */
`;

export const IntroductionImage = styled.Image`
  width: 400px;
  height: 338px; 
`;

export const BackgroundImage = styled.ImageBackground`
  width: 439px;
  height: 456px;
`;

export const ImageWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 180px;
`

export const ImageLogo = styled.Image`
  width: 36px;
  height: 41px;
`;

export const TextIntroduction = styled.Text`
  fontFamily: 'Poppins-Medium';
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #8F8F8F;
  margin-top: 10px;
  width: 300px
`;

export const TitleText = styled.Text`
  fontFamily: 'Poppins-Bold';
  font-size: 35px;
  text-align: center;
`;