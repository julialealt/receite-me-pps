import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 40px;
    gap: 3px;
`

export const InputText = styled.TextInput`
    font-family: 'Poppins-Regular';
    font-size: 12px;
    width: 100%;
    height: 48px;
    padding: 0 15px;

    border: 1px solid #B5B5B5;
    border-radius: 7px;

    color: #686868;
`

export const TextContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`

export const TextError = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 10px;
    color: #E33737;
`

export const TextMain = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 12px;
    color: #686868;
`
