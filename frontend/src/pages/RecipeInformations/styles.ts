import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    gap: 46px;
`

export const ImageRecipe = styled.Image`
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').width};
`

export const ContainerInformations = styled.View`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 25px;
`

export const TitleInformations = styled.Text`
    font-size: 26px;
    font-weight: 700;
`

export const ContainerFirstLayer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

export const TextFirstLayer = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #a9a9a9;
`

export const SeparateIcons = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`

export const ImageIcon = styled.Image`
    width: 20px;
    height: 20px;
`

export const ContainerMacroNutrients = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 27px;
    border-width: 2px;
    border-radius: 16px;
    border-color: #c9c7c7;
    padding: 10px 0;
    margin: 20px 0 25px 0;
`

export const SepareteMacroNutrients = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NumberMacroNutrients = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #22A36D;
`

export const TextMacroNutrients = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #a9a9a9;
`

export const ContainerButtons = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
    padding: 5px 7px;
    border-radius: 15px;
    gap: 7px;
`

export const ContainerIngredients = styled.View`
    display: flex;
    flex-direction: column;
`

// export const 

