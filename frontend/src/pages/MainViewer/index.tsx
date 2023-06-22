import { BottomBarContainer, Container, GreetingText, GreetingUserContainer, ScrollCategoryContainer, ScrollContainer, TextContainer, TitleText, UserContainer, UserLogo } from "./styles";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import Search from "../../components/Search";
import CategoryButton from "../../components/CategoryButton";
import RecipeButton from "../../components/RecipeButton";
import BottomBar from "../../components/BottomBar";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import { View } from "react-native";

const categories = [
    { name: 'Vegano', 
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

  interface RecipeData {
    id: number;
    name: string;
    time: string;
    image: string;
  }

export default function MainViewer() {
    const navigation = useNavigation();
    const [recipeData, setRecipeData] = useState<RecipeData[] | null>([{ 
        id: 0, 
        name: '', 
        time: '', 
        image: '' 
    }]);

        const getRecipeInformations = async () => {
            try {
              const response = await axios.get<RecipeData[]>('http://localhost:3000/recipes');
              const updatedRecipeData = response.data.map(({id, image, name, time}) => {
                if(name.length >= 15) {
                    name = name.slice(0, 14) + '...';
                }

                return {
                    id: id,
                    name: name,
                    time: time,
                    image: image
                }
              })
              setRecipeData(updatedRecipeData);

            } catch (error) {
              console.error('Error fetching recipe data:', error);
            }
          };

    useEffect(() => {
        getRecipeInformations();
    }, [])

    return(
        <View>
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
                                    <CategoryButton key={index} label={name} Icon={image} onPress={() => navigation.navigate('categoryRecipes', { category: name })} />
                                ))}
                            </ScrollCategoryContainer>
                        </ScrollView>
                    </TextContainer>
                    <TextContainer>
                        <TitleText>Recomendações</TitleText>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ScrollContainer>
                                {recipeData?.map(({ id ,name, time, image}) => (
                                    <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", {id: id})} />
                                ))}
                            </ScrollContainer>
                        </ScrollView>
                    </TextContainer>
                    <TextContainer>
                        <TitleText>Receitas recentes</TitleText>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ScrollContainer>
                                {recipeData?.map(({ id ,name, time, image}) => (
                                    <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", {id: id})} />
                                ))}
                            </ScrollContainer>
                        </ScrollView>
                    </TextContainer>
                    <TextContainer>
                        <TitleText>Receitas da semana</TitleText>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ScrollContainer>
                                {recipeData?.map(({ id ,name, time, image}) => (
                                    <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", {id: id})} />
                                ))}
                            </ScrollContainer>
                        </ScrollView>
                    </TextContainer>
                </Container>
            </ScrollView>
            <BottomBar />
        </View>
    )
}