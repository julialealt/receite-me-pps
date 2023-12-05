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

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-left: 25px;
  margin-right: 33px;
  width: 235px;
`

export const UserFunctionsIconContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`

//Text
export const UserName = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 20px;
    width: 240px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 3px;
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

export const UserLogoOverlay = styled.Image`
    width: 70px;
    height: 70px;
    align-self: center;
    margin-bottom: 20px;
`

export const UserLogoOverlay2 = styled.Image`
    width: 60px;
    height: 60px;
    align-self: center;
`

export const LogosContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 30px;
`

export const LogosContainer2 = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 30px;
`

export const ClickLogos2 = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
`

export const UserIcon = styled.Image`
    width: 18px;
    height: 18px;
`

export const PencilIcon = styled.Image`
`

export const ContainerPencil = styled.TouchableOpacity`
    bottom: 21px;
    left: 34px;
    width: 21px;
    height: 21px;
`

export const OverlayTitle = styled.Text`
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins-Medium';
    text-align: center;
    
`

export const OverlayArrowLeft = styled.Image`
    width: 20px;
    height: 20px;
`

export const ContainerArrow = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    gap: 20px;
`

export const ClickArrowLeft = styled.TouchableOpacity `
    width: 20px;
    height: 20px;
`

export const BlackLine = styled.View`
    margin: 0 30px;
    height: 1px;
    background-color: black;
`