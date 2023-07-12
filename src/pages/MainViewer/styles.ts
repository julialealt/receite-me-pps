import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

//View 
export const Container = styled.View`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 64px;
    margin-bottom: 90px;
    padding: 0 30px;
    min-height: ${Dimensions.get('window').height + 35}px;
`

export const UserContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const GreetingUserContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const  TextContainer = styled.View`
    display:flex;
    gap: 15px;
`

export const ScrollContainer = styled.View`
    height: 167px;
    display: flex;
    flex-direction: row;
    gap: 15px;
`

export const ScrollCategoryContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const RecipeContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;



// Text
export const GreetingText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
    color: #a9a9a9;

`

export const TitleText = styled.Text `
    font-family: 'Poppins-Bold';
    white-space: nowrap;
    font-size: 20px;
    width: 230px;
`

export const NotFoundText = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 14px;
    color: #878787;
`


// Image
export const UserLogo = styled.Image `
    width: 50px;
    height: 50px;
`