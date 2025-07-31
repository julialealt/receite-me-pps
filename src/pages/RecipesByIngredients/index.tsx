import { BackArrow, BackThePage, Container, IngredientsContainer, IngredientsIcons, RecipeContainer, TextTitle } from "./styles";
import { propsStack } from '../../routes/Models';
import SelectIngredientButton from "../../components/SelectIngredientButton";
import { CustomScrollView as ScrollView } from "../../../globalStyles";
import RecipeButton from "../../components/RecipeButton";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import React from "react";
import { recipeService } from "../../services/recipeService";
import type { ReceitaDto } from "../../dtos/ReceitaDto";

interface ParamsProps {
  ingredients: string[]
}

export default function RecipesByIngredients() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute();
  const { ingredients } = route.params as ParamsProps;
  const [allRecipes, setAllRecipes] = useState<ReceitaDto[]>()

  const getRecipes = async () => {
    try {
      const responseData = await recipeService.getRecipesByIngredients(ingredients)
      setAllRecipes(responseData);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    }
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <ScrollView>
      <Container>
        <BackThePage>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
          </TouchableOpacity>
          <TextTitle>Receitas que você pode fazer!</TextTitle>
          <Text>‎ ‎ ‎ ‎ </Text>
        </BackThePage>
        <IngredientsContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <IngredientsIcons>
              {ingredients.map((item, index) => (
                <SelectIngredientButton key={index} name={item} />
              ))}
            </IngredientsIcons>
          </ScrollView>
        </IngredientsContainer>
        <RecipeContainer>
          {allRecipes?.map(({ id, nome, pathImagem, tempoDePreparo }) => (
            <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} size="bigger" onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
          ))}
        </RecipeContainer>
      </Container>
    </ScrollView>
  )
}