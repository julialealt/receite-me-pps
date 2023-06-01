import styled from 'styled-components/native';

//View 
export const Container = styled.View`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 64px;
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

export const SearchContainer = styled.View`
    display:flex;
    align-items: center;
    justify-content: center;
`

// Text
export const GreetingText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: #a9a9a9;

`

export const CookText = styled.Text `
    font-size: 20px;
    font-weight: 700;
    width: 230px;
`


// Image
export const UserLogo = styled.Image `
    width: 100px;
    height: 100px;
`