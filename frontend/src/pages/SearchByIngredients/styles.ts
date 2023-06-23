import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ContainerScrollView = styled.ScrollView`
    background: #ffffff;
    min-height: ${Dimensions.get('window').height + 35}px;
    `

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 70px;
    margin-bottom: 90px;
    gap: 40px;
`

export const IngredientsContainer = styled.View`
    display: flex;
    width: 100%;
    padding: 0 25px;
    gap: 10px;
`

export const TitleText = styled.Text`
    fontFamily: 'Poppins-Bold';
    font-size: 30px;
    width: 220px;
`

export const ButtonContainer = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
`
