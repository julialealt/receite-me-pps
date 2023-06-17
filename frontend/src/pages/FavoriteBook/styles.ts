import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const ScrollViewContainer = styled.ScrollView`
    margin: 45px 25px 25px 25px;
    background: #ffffff;
`

//View
export const Container = styled.View`
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    gap: 30px;
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
`

export const TopSideRightImage = styled.Image`
    flex: 1;
    width: 100%;
    border-radius: 16px;
`

export const BottomSideRightImage = styled.Image`
    flex: 1;
    width: 100%;
    border-radius: 16px;
`

//Text
export const MainTitle = styled.Text`
    font-size: 25px;
    font-weight: 700;
`

export const TitleFavoriteBook = styled.Text`
    font-size: 19px;
    font-weight: 700;
`

export const SeeMore = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: #22A36D;
`

