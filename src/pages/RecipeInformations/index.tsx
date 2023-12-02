import {CustomScrollView as ScrollView } from "../../../globalStyles";
import { BackArrow, BackThePage, Container, ContainerButtons, ContainerFirstLayer, ContainerInformations, ContainerIngredientsAmounts, ContainerMacroNutrients, ContainerPreparationMethod, HeartImage, ImageIcon, ImageRecipe, IngredientsAmountsUnit, NumberMacroNutrients, PrepationMethodCircle, QuantityIngredientValue, SeparateIcons, SepareteMacroNutrients, TextFirstLayer, TextIngredientAmount, TextMacroNutrients, TextPrepationMethod, TitleInformations, UnitPrepationMethod } from "./styles";
import TradeColorButton from "../../components/TradeColorButton";
import { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from "axios";
import { TouchableOpacity } from "react-native";
import { propsStack } from '../../routes/Models';
import { AuthContext } from "../../context/auth";
import { apiURL } from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ParamsProps = {
  id: number;
}
interface RecipeData {
    id: number;
    nome: string;
    caloriasTotais: number;
    proteinasTotais: number;
    carboidratosTotais: number;
    gordurasTotais: number;
    ingredientes: {
      id: number;
      nome: string;
      quantidade: string;
      medida: string;
    }[];
    tempoDePreparo: string;
    pathImagem: string;
    modoDePreparo: string;
  }

  interface MacroNutrients {
    id: number;
    nome: string;
    quantidade: number
  }

  const imagePaths = {
    hearthColorTrue: require('../../assets/geral/hearthGreen.png'),
    hearthColorFalse: require('../../assets/geral/hearthWhite.png'),
  };

export default function RecipeInformations() {
    const route = useRoute();
    const { data } = useContext(AuthContext);
    const { id } = route.params as ParamsProps;
    const { saveId } = useContext(AuthContext);
    const navigation = useNavigation<propsStack>();
    const [tradeInformation, setTradeInformation] = useState(true);
    const [hearthColor, setHearthColor] = useState(true)
    const [recipeData, setRecipeData] = useState<RecipeData | undefined>();
    const [macroNutrients, setMacroNutrients] = useState<MacroNutrients[]>()
    
    const hearthWhite = require('../../assets/geral/hearthWhite.png');
    const hearthGreen = require('../../assets/geral/hearthGreen.png');
    const source = hearthColor ? hearthGreen : hearthWhite;

  const getRecipeInformations = async () => {
    const token = await AsyncStorage.getItem('@token'); 
    const response = await axios.get(`${apiURL}/receitas/findById/${id}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    });
    const responseData = response.data as RecipeData;
    const macroNutrients = [
      {
        id: 1,
        nome: 'carboidratos',
        quantidade: Math.round(responseData.carboidratosTotais)
      },
      {
        id: 2,
        nome: 'proteínas',
        quantidade: Math.round(responseData.proteinasTotais),
      },
      {
        id: 3,
        nome: 'gorduras',
        quantidade: Math.round(responseData.gordurasTotais),
      },

    ]
    saveId(id)
    setRecipeData(responseData);
    setMacroNutrients(macroNutrients)
  };

  const favoriteRecipe = async () => {
    try {
      const userId = data.id;
      const recipeId = id;
      const token = await AsyncStorage.getItem('@token'); 
  
      const response = await axios.post(`${apiURL}/pastas/${recipeId}/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
      const favoriteRecipe = response.data.message
      setHearthColor(favoriteRecipe)
    } catch (error) {
      console.error(error);
    }
  };

  const favoriteRecipeUseEffect = async () => {
    const userId = data.id;
    const recipeId = id;
    const token = await AsyncStorage.getItem('@token'); 

    await axios.post(`${apiURL}/pastas/${recipeId}/${userId}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    });
    const response2 = await axios.post(`${apiURL}/pastas/${recipeId}/${userId}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    });
    console.log(response2.data.message)
    const favoriteRecipe = response2.data.message
    setHearthColor(favoriteRecipe)
  }

  useEffect(() => {
    getRecipeInformations();
    }, []);

  useEffect(() => {
    favoriteRecipeUseEffect()
  }, [])


  // quantidade: Math.round(recipeData?.caloriasTotais),

    return(
        <ScrollView>
            <BackThePage>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <BackArrow source={require("../../assets/geral/arrowLeftWhite.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => favoriteRecipe()}>
                    <HeartImage source={source} />
                </TouchableOpacity>
            </BackThePage>
            <Container>
                <ImageRecipe source={{ uri: recipeData?.pathImagem }} />
                <ContainerInformations>
                    <TitleInformations>{recipeData?.nome}</TitleInformations>
                    <ContainerFirstLayer>
                        <SeparateIcons>
                            <ImageIcon source={require("../../assets/geral/clock.png")} />
                            <TextFirstLayer>{recipeData?.tempoDePreparo} min</TextFirstLayer>
                        </SeparateIcons>
                        <SeparateIcons>
                            <ImageIcon source={require("../../assets/geral/fire.png")} />
                            <TextFirstLayer>{recipeData?.caloriasTotais ? Math.round(recipeData?.caloriasTotais) : 0} kcal</TextFirstLayer>
                        </SeparateIcons>
                    </ContainerFirstLayer>
                    <ContainerMacroNutrients>
                        {macroNutrients?.map(({ id, nome, quantidade }) => (
                            <SepareteMacroNutrients key={id}>
                                <NumberMacroNutrients>{quantidade}g</NumberMacroNutrients>
                                <TextMacroNutrients>{nome}</TextMacroNutrients>
                            </SepareteMacroNutrients>
                        ))}
                    </ContainerMacroNutrients>
                    <ContainerButtons>
                        <TradeColorButton labelButton="Ingredientes" color={tradeInformation} onPress={() => setTradeInformation(true)} />
                        <TradeColorButton labelButton="Modo de preparo" color={!tradeInformation} onPress={() => setTradeInformation(false)} />
                    </ContainerButtons>
                    {tradeInformation ? (
                    <ContainerIngredientsAmounts>
                        {recipeData?.ingredientes.map(({id, nome, quantidade, medida}) => (
                            <IngredientsAmountsUnit key={id} >
                                <TextIngredientAmount>{nome}</TextIngredientAmount>
                                <QuantityIngredientValue> {medida === 'A gosto' ? medida : `${quantidade} ${medida}`}</QuantityIngredientValue>
                            </IngredientsAmountsUnit>
                        ))}
                    </ContainerIngredientsAmounts>
                    ) : (
                    <ContainerPreparationMethod>
                        {recipeData?.modoDePreparo.split("\n").map((item, index) => (
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