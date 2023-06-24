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
    fontFamily: 'Poppins-Bold';
    font-size: 20px;
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