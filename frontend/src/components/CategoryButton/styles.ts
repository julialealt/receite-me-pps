import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 85px;
    border: 1px solid #878787;
    border-radius: 10px;

    flex-shrink: 0;
`

export const IconCategory = styled.Image`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`

export const TextCategory = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 9px;
    
`
