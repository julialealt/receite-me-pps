import {CustomScrollView as ScrollView } from "../../../globalStyles";
import { Container, ContainerButtons, ContainerFirstLayer, ContainerInformations, ContainerIngredientsAmounts, ContainerMacroNutrients, ContainerPreparationMethod, ImageIcon, ImageRecipe, IngredientsAmountsUnit, NumberMacroNutrients, PrepationMethodCircle, QuantityIngredientValue, SeparateIcons, SepareteMacroNutrients, TextFirstLayer, TextIngredientAmount, TextMacroNutrients, TextPrepationMethod, TitleInformations, UnitPrepationMethod } from "./styles";
import TradeColorButton from "../../components/TradeColorButton";
import { useState } from "react";

interface macroNutrients {
    id: Number,
    MacroNutrient: string,
    Quantity: Number
}

interface ingredients {
    id: Number,
    ingredient: string,
    quantity: string
}

const macroNutrients: macroNutrients[] = [
    {
        id: 1,
        MacroNutrient: 'Carboidratos',
        Quantity: 68,
    },
    {
        id: 2,
        MacroNutrient: 'Proteínas',
        Quantity: 8,
    },
    {
        id: 3,
        MacroNutrient: 'Gorduras',
        Quantity: 13,
    },
]

const ingredients: ingredients[] = [
    { id: 1, ingredient: 'Costelinha suína', quantity: '200g' },
    { id: 2, ingredient: 'Macarrão instantâneo', quantity: '1 unidade' },
    { id: 3, ingredient: 'Acelga', quantity: 'a gosto' },
    { id: 4, ingredient: 'Cebolinha', quantity: 'a gosto' },
    { id: 5, ingredient: 'Cebola', quantity: '1 unidade' },
    { id: 6, ingredient: 'Shoyu', quantity: '100ml' },
    { id: 7, ingredient: 'Dente de alho', quantity: '4 unidades' },
    { id: 8, ingredient: 'Sal', quantity: 'a gosto' },
    { id: 9, ingredient: 'Gengibre', quantity: '1/6' },
    { id: 10, ingredient: 'Água', quantity: '2L' },
    { id: 11, ingredient: 'Milho', quantity: 'a gosto' },
];

const instructions: string[] = [
    'Em uma panela, frite o alho moído em fogo baixo até dourar',
    'Depois, coloque a costelinha na panela com a gordura virada para baixo até que doure',
    'Vire e deixe dourar o outro lado também',
    'Acrescente a água e deixe fervendo, depois abaixe o fogo',
    'Misture o gengibre ralado no molho shoyu e coloque a mistura na panela',
    'Coloque o macarrão e deixe cozinhar por 4 minutos, escorra e reserve',
    'Coloque um pouco de água para ferver e jogue em cima da moyashi',
    'Coloque o macarrão na tigela e acrescente 2 conchas do caldo do lámen',
    'Em seguida, coloque as costelinhas, os ovos, a acelga, o moyashi e jogue mais caldo por cima',
    'Jogue a cebolinha picada por cima e, pronto, bom apetite!'
];

export default function RecipeInformations() {
    const [tradeInformation, setTradeInformation] = useState(false)

    return(
        <ScrollView>
            <Container>
                <ImageRecipe source={require("../../assets/recipes/Ramen2.png")} />
                <ContainerInformations>
                    <TitleInformations>Ramen Coreano</TitleInformations>
                    <ContainerFirstLayer>
                        <SeparateIcons>
                            <ImageIcon source={require("../../assets/geral/clock.png")} />
                            <TextFirstLayer>15 min</TextFirstLayer>
                        </SeparateIcons>
                        <SeparateIcons>
                            <ImageIcon source={require("../../assets/geral/fire.png")} />
                            <TextFirstLayer>436 kcal</TextFirstLayer>
                        </SeparateIcons>
                    </ContainerFirstLayer>
                    <ContainerMacroNutrients>
                        {macroNutrients.map(({id, MacroNutrient, Quantity}) => (
                            <SepareteMacroNutrients key={id}>
                                <NumberMacroNutrients>{Quantity}G</NumberMacroNutrients>
                                <TextMacroNutrients>{MacroNutrient}</TextMacroNutrients>
                            </SepareteMacroNutrients>
                        ))}
                    </ContainerMacroNutrients>
                    <ContainerButtons>
                        <TradeColorButton labelButton="Ingredientes" color={tradeInformation} onPress={() => setTradeInformation(true)} />
                        <TradeColorButton labelButton="Modo de preparo" color={!tradeInformation} onPress={() => setTradeInformation(false)} />
                    </ContainerButtons>
                    {tradeInformation ? (
                    <ContainerIngredientsAmounts>
                        {ingredients.map(({id, ingredient, quantity}) => (
                            <IngredientsAmountsUnit key={id} >
                                <TextIngredientAmount>{ingredient}</TextIngredientAmount>
                                <QuantityIngredientValue>{quantity}</QuantityIngredientValue>
                            </IngredientsAmountsUnit>
                        ))}
                    </ContainerIngredientsAmounts>
                    ) : (
                    <ContainerPreparationMethod>
                        {instructions.map((item, index) => (
                            <UnitPrepationMethod key={index} >
                                <PrepationMethodCircle source={require('../../assets/geral/circle.png')} />
                                <TextPrepationMethod>{item}</TextPrepationMethod>
                            </UnitPrepationMethod>
                        ))}
                    </ContainerPreparationMethod>
                    )}
                
                </ContainerInformations>
            </Container>
        </ScrollView>
    )
}