import styled from 'styled-components/native';

export const Container = styled.View `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 85px;
    padding: 40px 0;
    width: 100%;
`

export const TextRecentlyRecipes = styled.Text `
    font-Family: 'Poppins-Bold';
    font-size: 18px;
    text-align: center;
    width: 250px;
    margin-top: 20px;
`

export const RecipeContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 25px;
`;

export const BackThePage = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
`;

export const BackArrow = styled.Image`
    width: 20px;
    height: 20px;
`

export const NotFoundText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    color: #878787;
`