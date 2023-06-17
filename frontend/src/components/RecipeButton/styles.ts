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
    font-size: 12px;
    font-weight: 700;
    text-align: left;
`

export const TextTimer = styled.Text`
    font-size: 10px;
    font-weight: 600;
    color: #A9A9A9;
    text-align: left;
    margin-top: -2px;
`

export const ImageRecipe = styled.Image`
    display: flex;
    align-self: center;
    width: ${({ size }: SizeProps) => (size === "bigger" ? "135px" : "115px")};
    height: 115px;
    border-radius: 20px;
`

export const ImageTimer = styled.Image`
    width: 11px;
    height: 11px;
`