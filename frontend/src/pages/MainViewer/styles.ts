import styled from 'styled-components/native';

//View 
export const Container = styled.View`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 64px;
    margin-bottom: 40px;
    padding: 0 30px;
`

export const UserContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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


// Text
export const GreetingText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: #a9a9a9;

`

export const TitleText = styled.Text `
    font-size: 20px;
    font-weight: 700;
    width: 230px;
`


// Image
export const UserLogo = styled.Image `
    width: 100px;
    height: 100px;
`