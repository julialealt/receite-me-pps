import { CustomScrollView as ScrollView } from "../../../../globalStyles";
import { BackArrow, BackThePage, Container, RecipeContainer, TextRecentlyRecipes } from "./styles";
import RecipeButton from "../../../components/RecipeButton";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from '../../../routes/Models';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "../../../lib/axios";
import React from "react";
import type { Recipe } from "../../../types";
import { recipeService } from "../../../services/recipeService";

export default function RecentlyViewed() {
  const navigation = useNavigation<propsStack>()
  const [allRecipes, setAllRecipes] = useState<Recipe[] | null>([{
    id: 0,
    nome: '',
    tempoDePreparo: 0,
    pathImagem: ''
  }]);

  const getRecipeInformations = async () => {
    try {
      const recentlyViewedArray = await AsyncStorage.getItem("recentlyViewed");
      const ids = JSON.parse(recentlyViewedArray || "[]");
      const recipePromises = ids.map(async (id: number) => {
        const responseData = await recipeService.getRecipeById(id);

        const { nome, pathImagem, tempoDePreparo } = responseData;
        let updatedName = nome;
        if (nome.length >= 14) {
          updatedName = nome.slice(0, 13) + '...';
        }

        return {
          id: id,
          nome: updatedName,
          tempoDePreparo: tempoDePreparo,
          pathImagem: pathImagem
        };
      });

      const updatedRecipeData = await Promise.all(recipePromises);
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
            <BackArrow source={require("../../../assets/geral/arrowLeft.png")} />
          </TouchableOpacity>
          <TextRecentlyRecipes>Receitas recentemente visualizadas</TextRecentlyRecipes>
          <Text>‎ ‎ ‎ ‎ ‎ </Text>
        </BackThePage>
        <RecipeContainer>
          {allRecipes?.map(({ id, nome, pathImagem, tempoDePreparo }) => (
            <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} size="bigger" onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
          ))}
        </RecipeContainer>
      </Container>
    </ScrollView>
  )
}