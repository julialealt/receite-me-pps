import styled from 'styled-components/native';

export const Container = styled.View `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 85px;
    width: 100%;
`

export const TextRecentlyRecipes = styled.Text `
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    width: 250px;
`

export const RecipeContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 25px;
`;
