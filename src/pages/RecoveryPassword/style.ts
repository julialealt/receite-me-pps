import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin: 75px 20px 0 20px;
    gap: 17px;
`

export const LoginText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 20px;
    color: #272727;
`

export const ContainerButton = styled.View`
    align-items: center;
    gap: 30px;
    margin-top:13px;
`

export const BackThePage = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    margin: 0 0 50px 0 ;
`;

export const BackArrow = styled.Image`
    width: 20px;
    height: 20px;
`