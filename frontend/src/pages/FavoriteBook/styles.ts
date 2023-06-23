import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ScrollViewContainer = styled.ScrollView`
    padding: 45px 25px 25px 25px;
    background: #ffffff;
`

//View
export const Container = styled.View`
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    padding-bottom: 170px;
    gap: 30px;
    min-height: ${Dimensions.get('window').height}px;

`

export const ContainerFavoriteBook = styled.View`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ContainerImages = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    height: 165px;
`

export const RightContainerImages = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LeftContainerImages = styled.View`
    flex: 2;
`

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

//Image

export const LeftImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: #D4D4D4;
`

export const TopSideRightImage = styled.Image`
    flex: 1;
    width: 100%;
    border-radius: 16px;
    background: #D4D4D4;
`

export const BottomSideRightImage = styled.Image`
    flex: 1;
    width: 100%;
    border-radius: 16px;
    background: #D4D4D4;
`

//Text
export const MainTitle = styled.Text`
    fontFamily: 'Poppins-Bold';
    font-size: 25px;
`

export const TitleFavoriteBook = styled.Text`
    fontFamily: 'Poppins-Bold';
    font-size: 19px;
`

export const SeeMore = styled.Text`
    fontFamily: 'Poppins-Medium';
    font-size: 14px;
    color: #22A36D;
`

