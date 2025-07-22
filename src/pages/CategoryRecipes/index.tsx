import { useNavigation, useRoute } from "@react-navigation/native";
import { CustomScrollView as ScrollView } from "../../../globalStyles";
import RecipeButton from "../../components/RecipeButton";
import { BackArrow, BackThePage, Container, RecipeContainer, TextRecentlyRecipes } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { propsStack } from '../../routes/Models';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "../../lib/axios";
import React from "react";
import type { Recipe } from "../../types";
import { recipeService } from "../../services/recipeService";

type ParamsProps = {
  category: string;
  value: string;
}

export default function CategoryRecipes() {
  const route = useRoute();
  const navigation = useNavigation<propsStack>()
  const { category, value } = route.params as ParamsProps;
  const [allRecipes, setAllRecipes] = useState<Recipe[] | null>([{
    id: 0,
    nome: '',
    tempoDePreparo: 0,
    pathImagem: ''
  }]);

  const getRecipeInformations = async () => {
    try {
      const response = await recipeService.getRecipesByCategory(value);

      const updatedRecipeData = response.map(({ id, pathImagem, nome, tempoDePreparo }) => {
        if (nome.length >= 14) {
          nome = nome.slice(0, 13) + '...';
        }
        return {
          id: id,
          nome: nome,
          tempoDePreparo: tempoDePreparo,
          pathImagem: pathImagem,
        };
      });

      setAllRecipes(updatedRecipeData);
    } catch (error) {
      console.error('Error fetching recipe data:', error);
    }
  };

  useEffect(() => {
    getRecipeInformations()
  }, [])

  return (
    <ScrollView>
      <Container>
        <BackThePage>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
          </TouchableOpacity>
          <TextRecentlyRecipes>{category}</TextRecentlyRecipes>
          <Text>‎ ‎ ‎ ‎ </Text>
        </BackThePage>
        <RecipeContainer>
          {allRecipes?.map(({ nome, id, pathImagem, tempoDePreparo }) => (
            <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} size="bigger" onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
          ))}
        </RecipeContainer>
      </Container>
    </ScrollView>
  )
}