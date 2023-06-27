import { BackArrow, BackThePage, Container, IngredientsContainer, IngredientsIcons, RecipeContainer, TextTitle } from "./styles";
import { propsStack } from '../../routes/Models';
import Button from "../../components/Button";
import SelectIngredientButton from "../../components/SelectIngredientButton";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import RecipeButton from "../../components/RecipeButton";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

interface ParamsProps {
  ingredients: string[]
}


const recipes = [
  { 
    id: 2,
    name: 'Coxinha', 
    time: '10-15 min',
    image: "https://i.postimg.cc/WzKWFG1x/Coxinha.png" },
  { 
    id: 3,
    name: 'Feijoada', 
    time: '10-15 min',
    image: "https://i.postimg.cc/26kXPjt9/Feijoada.png" },
  { 
    id: 4,
    name: 'Filé Mignon', 
    time: '10-15 min',
    image: "https://i.postimg.cc/tJ7v4Sph/fmignon.png"},
  { 
    id: 5,
    name: 'Hamburguer', 
    time: '10-15 min',
    image: "https://i.postimg.cc/zBxP5ZZz/Hamburguer.png" },
  { 
    id: 6,
    name: 'Cachorro Quente', 
    time: '10-15 min',
    image: "https://i.postimg.cc/W46HWq5J/HotDog.png" },
  { 
    id: 7,
    name: 'Ramen Coreano', 
    time: '10-15 min',
    image: "https://i.postimg.cc/Wp9QcrTG/Ramen2.png" },
  { 
    id: 8,
    name: 'Spaghetti', 
    time: '10-15 min',
    image: "https://i.postimg.cc/NjXVXzTD/Spaghetti.png" },
  { 
    id: 9,
    name: 'Sushi', 
    time: '10-15 min',
    image: "https://i.postimg.cc/xThhc2kq/Sushi.png" },
  { 
    id: 10,
    name: 'Yakissoba', 
    time: '10-15 min',
    image: "https://i.postimg.cc/rFK7Vmwv/Yakissoba.png" },
  ];


export default function RecipesByIngredients() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute();
  const { ingredients } = route.params as ParamsProps;
  console.log(ingredients)

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
            {recipes.map(({name, time, image}, index) => (
                <RecipeButton key={index} label={name} icon={image} time={time} size="bigger" />
            ))}
          </RecipeContainer>
      </Container>
    </ScrollView>
  )
}