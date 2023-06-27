import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

//View
export const Container = styled.View`
    align-items: center;
    margin-top: 100px;
    min-height: ${Dimensions.get('window').height}px;
`

export const UserContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UserFunctionsList = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 54px;
    gap: 34px;
`
export const UserFunctionsIconContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

//Text
export const UserName = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 20px;
    width: 240px;
    text-align: center;
`

export const UserStatus = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 14px;
    color: #A9A9A9;
    width: 180px;
    text-align: center;
`

export const UserFunctionsText = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 16px;
`

//Image

export const UserLogo = styled.Image`
    width: 90px;
    height: 90px;
`

export const UserIcon = styled.Image`
    width: 18px;
    height: 18px;
`
