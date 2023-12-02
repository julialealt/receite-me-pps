import { BackArrow, BackThePage, Container, IngredientsContainer, IngredientsIcons, RecipeContainer, TextTitle } from "./styles";
import { propsStack } from '../../routes/Models';
import Button from "../../components/Button";
import SelectIngredientButton from "../../components/SelectIngredientButton";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import RecipeButton from "../../components/RecipeButton";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { apiURL } from "../../../api";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ParamsProps {
  ingredients: string[]
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
  tempoDePreparo: number;
  pathImagem: string;
  modoDePreparo: string;
}

export default function RecipesByIngredients() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute();
  const { ingredients } = route.params as ParamsProps;
  const [allRecipes, setAllRecipes] = useState<RecipeData[]>()

  const getRecipes = async() => {
    const token = await AsyncStorage.getItem('@token'); 
    axios.post(`${apiURL}/receitas/filtro`, ingredients, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setAllRecipes(response.data);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao enviar o post:', error);
      });
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return(
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
            {allRecipes?.map(({id, nome, pathImagem, tempoDePreparo}) => (
                <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} size="bigger" onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
            ))}
          </RecipeContainer>
      </Container>
    </ScrollView>
  )
}