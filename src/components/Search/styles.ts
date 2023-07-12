import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const ImageContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
    border-top-left-radius: 30px ;
    border-bottom-left-radius: 30px;
    width: 15%;
`

export const ImageSearch = styled.Image`
    width: 20px;
    height: 20px;
`

export const InputSearch = styled.TextInput`
    font-family: 'Poppins-SemiBold';
    width: 85%;
    height: 48px;
    padding: 0;
    border-top-right-radius: 30px ;
    border-bottom-right-radius: 30px;
    background-color: #F8F8F8;
    color: #A9A9A9
`
