import { CustomScrollView as ScrollView } from "../../../globalStyles";
import { useContext, useEffect, useState } from "react";
import { BackArrow, BackThePage, Container, NotFoundText, RecipeContainer, TextRecentlyRecipes } from "./styles";
import RecipeButton from "../../components/RecipeButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from '../../routes/Models';
import { Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "../../lib/axios";
import React from "react";
import type { Recipe } from "../../types";
import { folderService } from "../../services/folderService";

type ParamsProps = {
  idFolder: number;
  nameFolder: string;
}

export default function FavoriteRecipes() {
  const route = useRoute();
  const { idFolder, nameFolder } = route.params as ParamsProps;
  const { data } = useContext(AuthContext);
  const navigation = useNavigation<propsStack>();
  const [notFound, setNotFound] = useState(true);
  const [allRecipes, setAllRecipes] = useState<Recipe[] | null>([{
    id: 0,
    nome: '',
    tempoDePreparo: 0,
    pathImagem: ''
  }]);

  const getFavoriteRecipes = async () => {
    try {
      const response = await folderService.getFolderRecipes(idFolder.toString())

      const updatedRecipeData = response.map(({ id, nome, tempoDePreparo, pathImagem }) => {
        if (nome.length >= 14) {
          nome = nome.slice(0, 13) + '...';
        }

        return {
          id: id,
          nome: nome,
          tempoDePreparo: tempoDePreparo,
          pathImagem: pathImagem
        }
      })

      if (updatedRecipeData.length == 0) {
        setNotFound(false)
      }
      setAllRecipes(updatedRecipeData);

    } catch (error) {
      console.error('Error fetching recipe data:', error);
    }
  }

  useEffect(() => {
    getFavoriteRecipes()
  }, [])


  return (
    <ScrollView>
      <Container>
        <BackThePage>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
          </TouchableOpacity>
          <TextRecentlyRecipes>{nameFolder}</TextRecentlyRecipes>
          <Text>‎ ‎ ‎ ‎ ‎ </Text>
        </BackThePage>
        <RecipeContainer>
          {notFound ? (
            allRecipes?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
              <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} size="bigger" onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
            ))
          ) : (
            <NotFoundText>Não encontramos receitas em seus favoritos...</NotFoundText>
          )}
        </RecipeContainer>
      </Container>
    </ScrollView>
  )
}