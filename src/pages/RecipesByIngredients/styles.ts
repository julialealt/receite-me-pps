import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 85px;
    margin-bottom: 60px;
    gap: 30px;
`

export const TextTitle = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 20px;
    width: 272px;
    text-align: center;
    margin-bottom: 5px;
`

export const IngredientsContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 0 30px;
`

export const RecipeContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`

export const IngredientsIcons = styled.View`
    display:flex;
    flex-direction: row;
    gap: 7px;
`

export const BackThePage = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
    width: 100%;
`

export const BackArrow = styled.Image`
    margin-top: 10px;
    width: 20px;
    height: 20px;
`