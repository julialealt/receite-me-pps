import {CustomScrollView as ScrollView } from "../../../globalStyles";
import { useContext, useEffect, useState } from "react";
import { BackArrow, BackThePage, Container, NotFoundText, RecipeContainer, TextRecentlyRecipes } from "./styles";
import RecipeButton from "../../components/RecipeButton";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../../routes/Models';
import { Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import { apiURL } from "../../../api";

interface RecipeData {
    id: number;    
    nome: string;
    tempoDePreparo: number;
    pathImagem: string;
  }

export default function FavoriteRecipes() {
    const { data } = useContext(AuthContext);
    const navigation = useNavigation<propsStack>();
    const [notFound, setNotFound] = useState(true);
    const [allRecipes, setAllRecipes] = useState<RecipeData[] | null>([{ 
        id: 0, 
        nome: '', 
        tempoDePreparo: 0, 
        pathImagem: '' 
    }]);

  const getFavoriteRecipes = async () => {
    try {
        const response = await axios.get<RecipeData[]>(`${apiURL}/pastas/favoritos/${data.id}`);
        const updatedRecipeData = response.data.map(({id, nome, tempoDePreparo, pathImagem}) => {
        if(nome.length >= 14) {
            nome = nome.slice(0, 13) + '...';
        }

        return {
            id: id,
            nome: nome,
            tempoDePreparo: tempoDePreparo,
            pathImagem: pathImagem
        }
        })

        console.log(updatedRecipeData)
        if(updatedRecipeData.length == 0) {
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


    return(
      <ScrollView>
        <Container>
          <BackThePage>
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
            </TouchableOpacity>
            <TextRecentlyRecipes>Favoritos</TextRecentlyRecipes>
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