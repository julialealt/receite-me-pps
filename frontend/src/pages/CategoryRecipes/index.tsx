import { useRoute } from "@react-navigation/native";
import { CustomScrollView as ScrollView } from "../../../globalStyles";
import RecipeButton from "../../components/RecipeButton";
import { Container, RecipeContainer, TextRecentlyRecipes } from "./styles";

type ParamsProps = {
    category: string;
  }

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

export default function CategoryRecipes() {
    const route = useRoute();
    const { category } = route.params as ParamsProps;

    return(
    <Container>
        <TextRecentlyRecipes>{category}</TextRecentlyRecipes>
        <ScrollView>
          <RecipeContainer>
            {recipes.map(({name, time, image}, index) => (
                <RecipeButton key={index} label={name} icon={image} time={time} size="bigger" />
            ))}
          </RecipeContainer>
        </ScrollView>
    </Container>
    )
}