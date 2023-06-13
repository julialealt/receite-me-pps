import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
export const Container = styled.View`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const ImageRecipe = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').width}px;
`

export const ContainerInformations = styled.View`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 25px;
    background: #FFFFFF;
    margin-top: -25px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`

export const TitleInformations = styled.Text`
    font-size: 26px;
    font-weight: 700;
    margin-top: 46px;
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

export const ContainerIngredientsAmounts = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const IngredientsAmountsUnit = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 13px 20px;
    background: #F8F8F8;
    width: 100%;
    border-radius: 15px;
`

export const TextIngredientAmount = styled.Text`
    font-size: 14px;
    font-weight: 500;
`

export const QuantityIngredientValue = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: #A9A9A9;
`

export const ContainerPreparationMethod = styled.View`
    background: #f8f8f8;
    padding: 14px 20px 20px 20px;
    border-radius: 20px;
    gap: 10px;
`

export const UnitPrepationMethod = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const TextPrepationMethod = styled.Text`
    font-size: 14px;
    font-weight: 500;
`

export const PrepationMethodCircle = styled.Image`
    width: 8px;
    height: 8px;
    margin-top: 7px;
`
