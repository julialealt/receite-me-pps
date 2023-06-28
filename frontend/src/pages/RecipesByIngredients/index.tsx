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


const recipes = [
  { 
    id: 2,
    nome: 'Coxinha', 
    time: 10,
    pathImagem: "https://i.postimg.cc/WzKWFG1x/Coxinha.png" },
  { 
    id: 3,
    nome: 'Feijoada', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/26kXPjt9/Feijoada.png" },
  { 
    id: 4,
    nome: 'Filé Mignon', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/tJ7v4Sph/fmignon.png"},
  { 
    id: 5,
    nome: 'Hamburguer', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/zBxP5ZZz/Hamburguer.png" },
  { 
    id: 6,
    nome: 'Cachorro Quente', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/W46HWq5J/HotDog.png" },
  { 
    id: 7,
    nome: 'Ramen Coreano', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/Wp9QcrTG/Ramen2.png" },
  { 
    id: 8,
    nome: 'Spaghetti', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/NjXVXzTD/Spaghetti.png" },
  { 
    id: 9,
    nome: 'Sushi', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/xThhc2kq/Sushi.png" },
  { 
    id: 10,
    nome: 'Yakissoba', 
    tempoDePreparo: 10,
    pathImagem: "https://i.postimg.cc/rFK7Vmwv/Yakissoba.png" },
  ];




export default function RecipesByIngredients() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute();
  const { ingredients } = route.params as ParamsProps;
  const [allRecipes, setAllRecipes] = useState<RecipeData[]>()
  console.log(ingredients)

  const getRecipes = async() => {
    axios.post(`${apiURL}/receitas/filtro`, ["Cacau em Po", "Óleo de Soja", "Açúcar", "Milho de Pipoca", "Leite Condensado", "Arroz"])
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

  useEffect(() => {
    console.log(allRecipes)
  }, [allRecipes])
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