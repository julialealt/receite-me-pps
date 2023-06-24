import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 85px;
    gap: 30px;
`

export const TextTitle = styled.Text`
    font-size: 26px;
    font-weight: 700;
    width: 272px;
    text-align: center;
    margin-bottom: 22px;
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
    width: 25px;
    height: 25px;
`