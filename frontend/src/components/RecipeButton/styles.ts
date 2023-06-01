import styled from 'styled-components/native';

export const Container = styled.View`
    width: 140px;
    height: 164px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 20px;
    elevation: 4;
`

export const ImageRecipe = styled.Image`
    display: flex;
    align-self: center;
    width: 115px;
    height: 115px;
    border-radius: 20px;
`

export const TextRecipe = styled.Text`
    font-size: 12px;
    font-weight: 700;
    text-align: left;
`

export const TextTimer = styled.Text`
    font-size: 10px;
    font-weight: 600;
    color: #A9A9A9;
    text-align: left;
`