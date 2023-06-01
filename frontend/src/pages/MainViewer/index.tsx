import { Image, View, ScrollView, Text } from "react-native";
import { Container, GreetingText, GreetingUserContainer, ScrollCategoryContainer, ScrollContainer, TextContainer, TitleText, UserContainer, UserLogo } from "./styles";
import Search from "../../components/Search";
import CategoryButton from "../../components/CategoryButton";
import RecipeButton from "../../components/RecipeButton";

const categories = [
    { name: 'Veggie', 
      image: require('../../assets/categories/Broccoli.png')},
    { name: 'Doces', 
      image: require('../../assets/categories/Shortcake.png')},
    { name: 'Fast Food', 
      image: require('../../assets/categories/Hamburger.png')},
    { name: 'Drinks', 
      image: require('../../assets/cat-logo.png')},
    { name: 'Mexicano', 
      image: require('../../assets/categories/Taco.png')}
  ];
  
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

export default function MainViewer() {
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
                <Search placeholder="Pesquise por receitas" />
                <TextContainer>
                    <TitleText>Categorias</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollCategoryContainer>
                            {categories.map(({ name, image }, index) => (
                                <CategoryButton key={index} label={name} Icon={image} />
                            ))}
                        </ScrollCategoryContainer>
                    </ScrollView>
                </TextContainer>
                <TextContainer>
                    <TitleText>Recomendações</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollContainer>
                            {recipes.map(({name, time, image}, index) => (
                                <RecipeButton key={index} label={name} icon={image} time={time} />
                            ))}
                        </ScrollContainer>
                    </ScrollView>
                </TextContainer>
                <TextContainer>
                    <TitleText>Receitas recentes</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollContainer>
                            {recipes.map(({name, time, image}, index) => (
                                <RecipeButton key={index} label={name} icon={image} time={time} />
                            ))}
                        </ScrollContainer>
                    </ScrollView>
                </TextContainer>
                <TextContainer>
                    <TitleText>Receitas da semana</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollContainer>
                            {recipes.map(({name, time, image}, index) => (
                                <RecipeButton key={index} label={name} icon={image} time={time} />
                            ))}
                        </ScrollContainer>
                    </ScrollView>
                </TextContainer>
            </Container>
        </ScrollView>
    )
}