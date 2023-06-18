import {CustomScrollView as ScrollView } from "../../../globalStyles";
import { Container, ContainerButtons, ContainerFirstLayer, ContainerInformations, ContainerIngredientsAmounts, ContainerMacroNutrients, ContainerPreparationMethod, ImageIcon, ImageRecipe, IngredientsAmountsUnit, NumberMacroNutrients, PrepationMethodCircle, QuantityIngredientValue, SeparateIcons, SepareteMacroNutrients, TextFirstLayer, TextIngredientAmount, TextMacroNutrients, TextPrepationMethod, TitleInformations, UnitPrepationMethod } from "./styles";
import TradeColorButton from "../../components/TradeColorButton";
import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native'
import axios from "axios";

type ParamsProps = {
  id: number;
}
interface RecipeData {
    id: number;
    name: string;
    time: string;
    image: string;
    calories: number;
    macroNutrients: {
      id: number;
      MacroNutrient: string;
      Quantity: number;
    }[];
    ingredients: {
      id: number;
      ingredient: string;
      quantity: string;
    }[];
    instructions: {
      id: number;
      instruction: string;
    }[];
  }

export default function RecipeInformations() {
    const [tradeInformation, setTradeInformation] = useState(false);
    const route = useRoute();
    const { id } = route.params as ParamsProps;
    const [recipeData, setRecipeData] = useState<RecipeData | undefined>();

  const getRecipeInformations = async () => {
    const response = await axios.get(`http://localhost:3000/recipes/${id}`);
    const responseData = response.data as RecipeData;
    setRecipeData(responseData);
  };

  useEffect(() => {
    getRecipeInformations();
    }, []);

    return(
        <ScrollView>
            <Container>
                <ImageRecipe source={{ uri: recipeData?.image }} />
                <ContainerInformations>
                    <TitleInformations>{recipeData?.name}</TitleInformations>
                    <ContainerFirstLayer>
                        <SeparateIcons>
                            <ImageIcon source={require("../../assets/geral/clock.png")} />
                            <TextFirstLayer>{recipeData?.time}</TextFirstLayer>
                        </SeparateIcons>
                        <SeparateIcons>
                            <ImageIcon source={require("../../assets/geral/fire.png")} />
                            <TextFirstLayer>{recipeData?.calories} kcal</TextFirstLayer>
                        </SeparateIcons>
                    </ContainerFirstLayer>
                    <ContainerMacroNutrients>
                        {recipeData?.macroNutrients.map(({ id, Quantity, MacroNutrient }) => (
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
                        {recipeData?.ingredients.map(({id, ingredient, quantity}) => (
                            <IngredientsAmountsUnit key={id} >
                                <TextIngredientAmount>{ingredient}</TextIngredientAmount>
                                <QuantityIngredientValue>{quantity}</QuantityIngredientValue>
                            </IngredientsAmountsUnit>
                        ))}
                    </ContainerIngredientsAmounts>
                    ) : (
                    <ContainerPreparationMethod>
                        {recipeData?.instructions.map(({id, instruction}) => (
                            <UnitPrepationMethod key={id} >
                                <PrepationMethodCircle source={require('../../assets/geral/circle.png')} />
                                <TextPrepationMethod>{instruction}</TextPrepationMethod>
                            </UnitPrepationMethod>
                        ))}
                    </ContainerPreparationMethod>
                    )}
                
                </ContainerInformations>
            </Container>
        </ScrollView>
    )
}