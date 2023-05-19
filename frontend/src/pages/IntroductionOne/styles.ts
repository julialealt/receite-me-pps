import styled from 'styled-components/native';

export const Wave = styled.Image `
    width: 100%;
    height: 170px;
`

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const IntroductionImage = styled.Image`
  width: 400px;
  height: 310px;
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

export const ImageLogo = styled.Image`
    width: 36px;
    height: 41px;
`;

export const TextIntroduction = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #8F8F8F;
    margin-top: 10px;
`;