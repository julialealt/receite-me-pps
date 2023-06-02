import { ScrollView } from "react-native";
import { CenteredContainer, Container, GreetingText, GreetingUserContainer, RecipeContainer, TitleText, UserContainer, UserLogo } from "./styles";
import Search from "../../components/Search";
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

export default function SearchViewer() {
    return(
        <ScrollView>
            <Container>
                <UserContainer>
                    <GreetingUserContainer>
                        <GreetingText>Olá, Rossana</GreetingText>
                        <TitleText>Vamos Cozinhar uma boa receita hoje!</TitleText>
                    </GreetingUserContainer>
                    <UserLogo source={require('../../assets/Users/Janet.png')} />
                </UserContainer>
                <Search />
                <RecipeContainer>
                  {recipes.map(({name, time, image}, index) => (
                      <RecipeButton key={index} label={name} icon={image} time={time} size="bigger" />
                  ))}
                </RecipeContainer>    
            </Container>
        </ScrollView>
    )
}