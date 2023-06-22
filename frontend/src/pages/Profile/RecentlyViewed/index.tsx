import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import { BackArrow, BackThePage, Container, RecipeContainer, TextRecentlyRecipes } from "./styles";
import RecipeButton from "../../../components/RecipeButton";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const recipes = [
    { name: 'Coxinha', 
      time: '10-15 min',
      image: require('../../../assets/recipes/Coxinha.png') },
    { name: 'Feijoada', 
      time: '10-15 min',
      image: require('../../../assets/recipes/Feijoada.png') },
    { name: 'Filé Mignon', 
      time: '10-15 min',
      image: require('../../../assets/cat-logo.png') },
    { name: 'Hamburguer', 
      time: '10-15 min',
      image: require('../../../assets/recipes/Hamburguer.png') },
    { name: 'Cachorro Quente', 
      time: '10-15 min',
      image: require('../../../assets/recipes/HotDog.png') },
    { name: 'Ramen Coreano', 
      time: '10-15 min',
      image: require('../../../assets/recipes/Ramen.png') },
    { name: 'Spaghetti', 
      time: '10-15 min',
      image: require('../../../assets/recipes/Spaghetti.png') },
    { name: 'Sushi', 
      time: '10-15 min',
      image: require('../../../assets/recipes/Sushi.png') },
    { name: 'Yakissoba', 
      time: '10-15 min',
      image: require('../../../assets/recipes/Yakissoba.png') },
    ];

export default function RecentlyViewed() {
    const navigation = useNavigation()

    return(
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
              {recipes.map(({name, time, image}, index) => (
                  <RecipeButton key={index} label={name} icon={image} time={time} size="bigger" />
              ))}
            </RecipeContainer>
        </Container>
      </ScrollView>
    )
}