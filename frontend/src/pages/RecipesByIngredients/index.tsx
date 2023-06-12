import { Container, IngredientsContainer, IngredientsIcons, RecipeContainer, TextTitle } from "./styles";
import Button from "../../components/Button";
import SelectIngredientButton from "../../components/SelectIngredientButton";
import { ScrollView, View } from "react-native";
import RecipeButton from "../../components/RecipeButton";

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
    return(
      <ScrollView>
        <Container>
            <TextTitle>Receitas que você pode fazer!</TextTitle>
            <IngredientsContainer>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <IngredientsIcons>
                  <SelectIngredientButton />
                  <SelectIngredientButton />
                  <SelectIngredientButton />
                  <SelectIngredientButton />
                  <SelectIngredientButton />
                  <SelectIngredientButton />
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