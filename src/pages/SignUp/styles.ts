import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin: 75px 0;
    gap: 17px;
`

export const LoginText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 25px;
    color: #272727;
    margin: 0 0 8px 0 ;
`

export const SubText = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 12px;
    color: #686868;
`

export const ContainerButton = styled.View`
    align-items: center;
    gap: 30px;
    margin-top:13px;
`

export const ContainerTitle = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const ContainerWarning = styled.View`
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;
`

export const WarningText = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 10px;
    color: #E33737;
`

export const ImageWarning = styled.Image`
  width: 14px;
  height: 14px; 
`;