import { CustomScrollView as ScrollView } from "../../../globalStyles";
import { BackArrow, BackThePage, Container, ContainerButtons, ContainerFirstLayer, ContainerInformations, ContainerIngredientsAmounts, ContainerMacroNutrients, ContainerPreparationMethod, HeartImage, ImageIcon, ImageRecipe, IngredientsAmountsUnit, ItemFoldersContainer, NumberMacroNutrients, PrepationMethodCircle, QuantityIngredientValue, SeparateIcons, SepareteMacroNutrients, TextFirstLayer, TextIngredientAmount, TextMacroNutrients, TextPrepationMethod, TitleInformations, TitlePopUp, UnitPrepationMethod } from "./styles";
import TradeColorButton from "../../components/TradeColorButton";
import { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity, View } from "react-native";
import { propsStack } from '../../routes/Models';
import { AuthContext } from "../../context/auth";
import { Overlay } from "@rneui/base";
import MenuItemsFolders from "../../components/MenuItemsFolders";
import React from "react";
import type { Recipe } from "../../types";
import { folderService } from "../../services/folderService";
import { recipeService } from "../../services/recipeService";

type ParamsProps = {
  id: number;
}

interface MacroNutrients {
  id: number;
  nome: string;
  quantidade: number
}

interface FolderItems {
  id: number;
  nome: string;
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
  const [recipeData, setRecipeData] = useState<Recipe | undefined>();
  const [macroNutrients, setMacroNutrients] = useState<MacroNutrients[]>();
  const [folderItems, setFolderItems] = useState<FolderItems[]>();
  const [visibleOverlay, setVisibleOverlay] = useState(false);

  const hearthWhite = require('../../assets/geral/hearthWhite.png');
  const hearthGreen = require('../../assets/geral/hearthGreen.png');
  const source = hearthColor ? hearthGreen : hearthWhite;

  const getRecipeInformations = async () => {
    const responseData = await recipeService.getRecipeById(id);
    const macroNutrients = [
      {
        id: 1,
        nome: 'carboidratos',
        quantidade: Math.round(responseData.carboidratosTotais ?? 0)
      },
      {
        id: 2,
        nome: 'proteínas',
        quantidade: Math.round(responseData.proteinasTotais ?? 0),
      },
      {
        id: 3,
        nome: 'gorduras',
        quantidade: Math.round(responseData.gordurasTotais ?? 0),
      },

    ]
    saveId(id)
    setRecipeData(responseData);
    setMacroNutrients(macroNutrients)
  };

  const openOverlay = async () => {
    setVisibleOverlay(true)

  }

  const favoriteRecipeUseEffect = async () => {
    const userId = data.id;
    const recipeId = id;

    const response1 = await folderService.favoriteRecipe(recipeId, userId);
    const response2 = await folderService.favoriteRecipe(recipeId, userId);
    console.log(response2.message)
    const favoriteRecipe = response2.message
    setHearthColor(favoriteRecipe)
  }

  const findFoldersById = async () => {
    try {
      const responseData = await folderService.getFoldersByUserId(data.id);
      const pastasFormatadas = responseData.map((pasta: FolderItems) => ({
        id: pasta.id,
        nome: pasta.nome
      }));

      setFolderItems(pastasFormatadas);
      console.log(folderItems)

    } catch (error) {
      console.error(error);
    }
  };

  const favoriteRecipe = async () => {
    try {
      const userId = data.id;
      const recipeId = id;

      const response = await folderService.favoriteRecipe(recipeId, userId);
      const favoriteRecipe = response.message
      setHearthColor(favoriteRecipe)
    } catch (error) {
      console.error(error);
    }
  };

  const addRecipeinFolder = async (idFolder: number) => {
    try {
      await folderService.addRecipeToFolder(idFolder, id)
      setVisibleOverlay(false);
      setHearthColor(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRecipeInformations();
  }, []);

  useEffect(() => {
    favoriteRecipeUseEffect()
  }, [])

  useEffect(() => {
    findFoldersById()
  }, [])



  return (
    <ScrollView>
      <View>
        <Overlay
          onBackdropPress={() => setVisibleOverlay(false)}
          isVisible={visibleOverlay}
          overlayStyle={{ backgroundColor: "#FFFFFF", width: 301, height: 402, borderRadius: 20 }}>
          <TitlePopUp>Selecione a pasta que deseja salvar a receita</TitlePopUp>
          <ScrollView>
            <ItemFoldersContainer>
              {folderItems?.map(({ nome, id }) => (
                <MenuItemsFolders key={id} name={nome} onPress={() => addRecipeinFolder(id)} />
              ))}

            </ItemFoldersContainer>
          </ScrollView>
        </Overlay>

      </View>

      <BackThePage>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <BackArrow source={require("../../assets/geral/arrowLeftWhite.png")} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => favoriteRecipe()}> */}
        <TouchableOpacity onPress={() => openOverlay()}>
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
              <TextFirstLayer>{Math.round(recipeData?.caloriasTotais ?? 0)} kcal</TextFirstLayer>
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
              {recipeData?.ingredientes?.map(({ id, nome, quantidade, medida }) => (
                <IngredientsAmountsUnit key={id} >
                  <TextIngredientAmount>{nome}</TextIngredientAmount>
                  <QuantityIngredientValue> {medida === 'A gosto' ? medida : `${quantidade} ${medida}`}</QuantityIngredientValue>
                </IngredientsAmountsUnit>
              ))}
            </ContainerIngredientsAmounts>
          ) : (
            <ContainerPreparationMethod>
              {recipeData?.modoDePreparo?.split("\n").map((item, index) => (
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