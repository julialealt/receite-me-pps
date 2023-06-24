import { BottomBarContainer, Container, GreetingText, GreetingUserContainer, NotFoundText, RecipeContainer, ScrollCategoryContainer, ScrollContainer, TextContainer, TitleText, UserContainer, UserLogo } from "./styles";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import CategoryButton from "../../components/CategoryButton";
import { useNavigation } from "@react-navigation/native";
import RecipeButton from "../../components/RecipeButton";
import { useEffect, useState, useContext } from "react";
import BottomBar from "../../components/BottomBar";
import Search from "../../components/Search";
import { View } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/auth"

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

  const recipes = [
    { 
      id: 2,
      name: 'Coxinha', 
      time: '10-15 min',
      image: require('../../assets/recipes/Coxinha.png') },
    { 
      id: 3,
      name: 'Feijoada', 
      time: '10-15 min',
      image: require('../../assets/recipes/Feijoada.png') },
    { 
      id: 4,
      name: 'Filé Mignon', 
      time: '10-15 min',
      image: require('../../assets/cat-logo.png') },
    { 
      id: 5,
      name: 'Hamburguer', 
      time: '10-15 min',
      image: require('../../assets/recipes/Hamburguer.png') },
    { 
      id: 6,
      name: 'Cachorro Quente', 
      time: '10-15 min',
      image: require('../../assets/recipes/HotDog.png') },
    { 
      id: 7,
      name: 'Ramen Coreano', 
      time: '10-15 min',
      image: require('../../assets/recipes/Ramen.png') },
    { 
      id: 8,
      name: 'Spaghetti', 
      time: '10-15 min',
      image: require('../../assets/recipes/Spaghetti.png') },
    { 
      id: 9,
      name: 'Sushi', 
      time: '10-15 min',
      image: require('../../assets/recipes/Sushi.png') },
    { 
      id: 10,
      name: 'Yakissoba', 
      time: '10-15 min',
      image: require('../../assets/recipes/Yakissoba.png') },
    ];

  interface RecipeData {
    id: number;    
    name: string;
    time: string;
    image: string;
  }

export default function MainViewer() {
    const navigation = useNavigation();
    const { data } = useContext(AuthContext);
    const [searchInput, setSearchInput] = useState('');
    const [mainOrSearch, setMainOrSearch] = useState(true)
    const [notFound, setNotFound] = useState(true);
    const [recipeData, setRecipeData] = useState<RecipeData[] | null>([{ 
        id: 0, 
        name: '', 
        time: '', 
        image: '' 
    }]);
    const [allRecipes, setAllRecipes] = useState<RecipeData[] | null>([{ 
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

    const filterRecipes = (value: string) => {
        const trimmedValue = value.trim()
        if(trimmedValue.length !== 0 ) {
            const filteredData = recipes.filter(({name}) => name.toLowerCase().includes(trimmedValue.toLowerCase()));
            const booleanData = !!filteredData.length
            setAllRecipes(filteredData);
            setMainOrSearch(false)
            setNotFound(booleanData)
        } else {
            setMainOrSearch(true)
        }
    }
        
    useEffect(() => {
        getRecipeInformations();
    }, [])

    useEffect(() => {
        filterRecipes(searchInput);
    }, [searchInput])

    return(
        <View>
            <ScrollView>
                <Container>
                    <UserContainer>
                        <GreetingUserContainer>
                            <GreetingText>Olá, {data.name?.split(' ')[0]}</GreetingText>
                            <TitleText>Vamos Cozinhar uma boa receita hoje!</TitleText>
                        </GreetingUserContainer>
                        <UserLogo source={require('../../assets/Users/Janet.png')} />
                    </UserContainer>
                    <Search placeholder="Pesquise por receitas" 
                    onChangeText={(text) => setSearchInput(text)} />
                    {mainOrSearch ? ( 
                    <>
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
                                    {recipeData?.map(({ id, name, time, image }) => (
                                        <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Receitas recentes</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeData?.map(({ id, name, time, image }) => (
                                        <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Receitas da semana</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeData?.map(({ id, name, time, image }) => (
                                        <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                            </> ) : (
                    <RecipeContainer>
                        {notFound ? (
                            allRecipes?.map(({id, image, name, time}) => (
                                <RecipeButton key={id} label={name} icon={image} time={time} size="bigger" />
                            ))
                            ) : (
                            <NotFoundText>Não encontramos receitas com os ingredientes selecionados...</NotFoundText>
                        )}
                        
                    </RecipeContainer>   )}
                </Container>
            </ScrollView>
            <BottomBar />
        </View>
    )
}