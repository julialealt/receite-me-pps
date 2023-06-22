import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 85px;
    padding: 0  15px;
    width: 100%;
`

export const BackThePage = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
`

export const ContainerEditProfileInputs = styled.View`
    display: flex;
    flex-direction: column; 
    width: 100%;
    align-items: center;
    gap: 17px;
    margin: 40px 0;
    
`

export const EditProfileText = styled.Text`
    font-size: 20px;
    font-weight: 700;
`

export const BackArrow = styled.Image`
    width: 25px;
    height: 25px;
`