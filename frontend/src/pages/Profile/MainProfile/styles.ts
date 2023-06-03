import styled from 'styled-components/native';

//View
export const Container = styled.View`
    align-items: center;
    margin-top: 100px;
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
export const UserFunctionsIconContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

//Text
export const UserName = styled.Text`
    font-size: 20px;
    font-weight: 700;
    width: 240px;
    text-align: center;
`

export const UserStatus = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: #A9A9A9;
    width: 180px;
    text-align: center;
`

export const UserFunctionsText = styled.Text`
    font-size: 16px;
    font-weight: 500;
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
