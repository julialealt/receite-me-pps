import { BackArrow, BackThePage, Container, IngredientsContainer, IngredientsIcons, RecipeContainer, TextTitle } from "./styles";
import Button from "../../components/Button";
import SelectIngredientButton from "../../components/SelectIngredientButton";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import RecipeButton from "../../components/RecipeButton";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type ParamsProps = {
  ingredients: {
    id: number;
    ingredient: string;
  }[];
}[];

const recipes = [
  { name: 'Coxinha', 
    time: '10-15 min',
    image: require('../../assets/recipes/Coxinha.png') },
  { name: 'Feijoada', 
    time: '10-15 min',
    image: require('../../assets/recipes/Feijoada.png') },
  { name: 'Filé Mignon', 
    time: '10-15 min',
    image: require('../../assets/cat-logo.png') },
  { name: 'Hamburguer', 
    time: '10-15 min',
    image: require('../../assets/recipes/Hamburguer.png') },
  { name: 'Cachorro Quente', 
    time: '10-15 min',
    image: require('../../assets/recipes/HotDog.png') },
  { name: 'Ramen Coreano', 
    time: '10-15 min',
    image: require('../../assets/recipes/Ramen.png') },
  { name: 'Spaghetti', 
    time: '10-15 min',
    image: require('../../assets/recipes/Spaghetti.png') },
  { name: 'Sushi', 
    time: '10-15 min',
    image: require('../../assets/recipes/Sushi.png') },
  { name: 'Yakissoba', 
    time: '10-15 min',
    image: require('../../assets/recipes/Yakissoba.png') },
  ];


export default function RecipesByIngredients() {
  const navigation = useNavigation();
  const route = useRoute();

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
                {/* {routeParams.map(({id, ingredient}) => (
                  <SelectIngredientButton key={id} name={ingredient} />
                ))} */}
                  <SelectIngredientButton name="Terra Seca"/>
                  <SelectIngredientButton name="Terra Seca"/>
                  <SelectIngredientButton name="Terra Seca"/>
                  <SelectIngredientButton name="Terra Seca"/>
              </IngredientsIcons>
            </ScrollView>
          </IngredientsContainer>
          <RecipeContainer>
            {recipes.map(({name, time, image}, index) => (
                <RecipeButton key={index} label={name} icon={image} time={time} size="bigger" />
            ))}
          </RecipeContainer>
      </Container>
    </ScrollView>
  )
}