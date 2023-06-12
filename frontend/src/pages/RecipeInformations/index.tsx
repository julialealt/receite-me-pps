import { ScrollView } from "react-native";
import { Container, ContainerButtons, ContainerFirstLayer, ContainerInformations, ContainerIngredients, ContainerMacroNutrients, ImageIcon, ImageRecipe, NumberMacroNutrients, SeparateIcons, SepareteMacroNutrients, TextFirstLayer, TextMacroNutrients, TitleInformations } from "./styles";
import TradeColorButton from "../../components/TradeColorButton";
import { useState } from "react";

interface macroNutrients {
    id: Number,
    MacroNutrient: string,
    Quantity: Number
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
                </ContainerInformations>
                {/* <ContainerIngredients>

                </ContainerIngredients> */}
            </Container>
        </ScrollView>
    )
}