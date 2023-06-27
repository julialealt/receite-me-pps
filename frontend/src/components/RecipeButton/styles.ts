import styled from 'styled-components/native';

interface SizeProps {
    size?: string,
}

export const Container = styled.TouchableOpacity`
    width: ${({ size }: SizeProps) => (size === "bigger" ? "160px" : "140px")};
    height: 164px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 20px;
    elevation: 4;
`

export const ContainerTimer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
`

export const TextRecipe = styled.Text`
    fontFamily: 'Poppins-Bold';
    font-size: 11px;
    text-align: left;
    margin-top: 2px;
`

export const TextTimer = styled.Text`
    fontFamily: 'Poppins-SemiBold';
    font-size: 10px;
    color: #A9A9A9;
    text-align: left;
    margin-top: 1px;
`

export const ImageRecipe = styled.Image`
    display: flex;
    align-self: center;
    width: ${({ size }: SizeProps) => (size === "bigger" ? "135px" : "115px")};
    height: 110px;
    border-radius: 20px;
`

export const ImageTimer = styled.Image`
    width: 11px;
    height: 11px;
    margin-right: 1px;
    margin-bottom: 1px;
`