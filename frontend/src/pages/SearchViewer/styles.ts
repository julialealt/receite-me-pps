import styled from 'styled-components/native';

//View

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 64px;
    padding: 0 30px;
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

export const RecipeContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;

//Text

export const GreetingText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
    color: #a9a9a9;

`

export const TitleText = styled.Text `
    font-family: 'Poppins-Bold';
    font-size: 20px;
    width: 230px;
`

//Image

export const UserLogo = styled.Image `
    width: 60px;
    height: 60px;
`