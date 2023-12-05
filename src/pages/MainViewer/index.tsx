import { Container, GreetingText, GreetingUserContainer, NotFoundText, RecipeContainer, ScrollCategoryContainer, ScrollContainer, TextContainer, TitleText, UserContainer, UserLogo } from "./styles";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import CategoryButton from "../../components/CategoryButton";
import { useNavigation } from "@react-navigation/native";
import RecipeButton from "../../components/RecipeButton";
import { useEffect, useState, useContext } from "react";
import Search from "../../components/Search";
import { View } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/auth"
import { propsStack } from '../../routes/Models';
import { apiURL } from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const categories = [
    { name: 'Vegetariano', 
      value: 'vegetariano',
      image: require('../../assets/categories/Broccoli.png')},
    { name: 'Doces', 
      value: 'doce',
      image: require('../../assets/categories/Shortcake.png')},
    { name: 'Sem lactose', 
      value: 'lactose',
      image: require('../../assets/categories/GlassOfMilk.png')},
    { name: 'Salgadas', 
      value: 'salgado',
      image: require('../../assets/categories/Spaghetti.png')},
    { name: 'Sem glúten', 
      value: 'gluten',
      image: require('../../assets/categories/Bread.png')}
  ];

  interface RecipeData {
    id: number;    
    nome: string;
    tempoDePreparo: number;
    pathImagem: string;
  }

export default function MainViewer() {
    const navigation = useNavigation<propsStack>();
    const { data } = useContext(AuthContext);
    const [searchInput, setSearchInput] = useState('');
    const [mainOrSearch, setMainOrSearch] = useState(true)
    const [notFound, setNotFound] = useState(true);
    const [recipeData, setRecipeData]= useState<RecipeData[] | null>([{ 
        id: 0, 
        nome: '', 
        tempoDePreparo: 0, 
        pathImagem: '' 
    }]);
    const [recipeRecomendations, setRecipeRecomendations] = useState<RecipeData[] | null>([{ 
        id: 0, 
        nome: '', 
        tempoDePreparo: 0, 
        pathImagem: '' 
    }]);
    const [recipeRecently, setRecipeRecently] = useState<RecipeData[] | null>([{ 
        id: 0, 
        nome: '', 
        tempoDePreparo: 0, 
        pathImagem: '' 
    }]);
    const [recipeWeek, setRecipeWeek] = useState<RecipeData[] | null>([{ 
        id: 0, 
        nome: '', 
        tempoDePreparo: 0, 
        pathImagem: '' 
    }]);
    const [allRecipes, setAllRecipes] = useState<RecipeData[] | null>([{ 
        id: 0, 
        nome: '', 
        tempoDePreparo: 0, 
        pathImagem: '' 
    }]);
    
    const avatarMappings: any = {
        1: require('../../assets/Users/Janet.png'),
        2: require('../../assets/Users/Hansel.png'),
        3: require('../../assets/Users/Conan.png'),
        4: require('../../assets/Users/Ruby.png'),
        5: require('../../assets/Users/Jonas.png'),
      };

    const getRecipeInformations = async () => {
        try {
            const token = await AsyncStorage.getItem('@token'); 
            const response = await axios.get<RecipeData[]>(`${apiURL}/receitas/recomendacoes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedRecipeData = response.data.map(({id, nome, tempoDePreparo, pathImagem}) => {
            if(nome.length >= 14) {
                nome = nome.slice(0, 13) + '...';
            }

            return {
                id: id,
                nome: nome,
                tempoDePreparo: tempoDePreparo,
                pathImagem: pathImagem
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
            const filteredData = recipeData?.filter(({nome}) => nome.toLowerCase().includes(trimmedValue.toLowerCase()));
            const booleanData = !!filteredData?.length
            setAllRecipes(filteredData ?? null);
            setMainOrSearch(false)
            setNotFound(booleanData)
        } else {
            setMainOrSearch(true)
        }
    }

    const getRecomendationsRecipes = async () => {
        try {
            const token = await AsyncStorage.getItem('@token'); 
            const response = await axios.get<RecipeData[]>(`${apiURL}/receitas/recomendacoes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedRecipeData = response.data.map(({id, nome, tempoDePreparo, pathImagem}) => {
            if(nome.length >= 14) {
                nome = nome.slice(0, 13) + '...';
            }

            return {
                id: id,
                nome: nome,
                tempoDePreparo: tempoDePreparo,
                pathImagem: pathImagem
            }
            })
            setRecipeRecomendations(updatedRecipeData);

        } catch (error) {
            console.error('Error fetching recipe data:', error);
        }
    }

    const getRecentlyRecipes = async () => {
        try {
            const token = await AsyncStorage.getItem('@token'); 
            const response = await axios.get<RecipeData[]>(`${apiURL}/receitas/recomendacoes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedRecipeData = response.data.map(({id, nome, tempoDePreparo, pathImagem}) => {
            if(nome.length >= 14) {
                nome = nome.slice(0, 13) + '...';
            }

            return {
                id: id,
                nome: nome,
                tempoDePreparo: tempoDePreparo,
                pathImagem: pathImagem
            }
            })
            setRecipeRecently(updatedRecipeData);

        } catch (error) {
            console.error('Error fetching recipe data:', error);
        }
    }

    const getWeekRecipes = async () => {
        try {
            const token = await AsyncStorage.getItem('@token'); 
            const response = await axios.get<RecipeData[]>(`${apiURL}/receitas/recomendacoes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedRecipeData = response.data.map(({id, nome, tempoDePreparo, pathImagem}) => {
            if(nome.length >= 14) {
                nome = nome.slice(0, 13) + '...';
            }

            return {
                id: id,
                nome: nome,
                tempoDePreparo: tempoDePreparo,
                pathImagem: pathImagem
            }
            })
            setRecipeWeek(updatedRecipeData);

        } catch (error) {
            console.error('Error fetching recipe data:', error);
        }
    }
    
    useEffect(() => {
        getRecipeInformations();
        getRecomendationsRecipes();
        getRecentlyRecipes();
        getWeekRecipes();
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
                            <GreetingText>Olá, {data.nome?.split(' ')[0]}</GreetingText>
                            <TitleText>Vamos cozinhar uma boa receita hoje!</TitleText>
                        </GreetingUserContainer>
                        <UserLogo source={avatarMappings[data.avatar]} />
                    </UserContainer>
                    <Search placeholder="Pesquise por receitas" 
                    onChangeText={(text) => setSearchInput(text)} />
                    {mainOrSearch ? ( 
                    <>
                        <TextContainer>
                            <TitleText>Categorias</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollCategoryContainer>
                                    {categories.map(({ name, image, value }, index) => (
                                        <CategoryButton key={index} label={name} Icon={image} onPress={() => navigation.navigate('CategoryRecipes', { category: name , value: value})} />
                                    ))}
                                </ScrollCategoryContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Recomendações</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeRecomendations?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
                                        <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Receitas recentes</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeRecently?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
                                        <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Receitas da semana</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeWeek?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
                                        <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                            </> ) : (
                    <RecipeContainer>
                        {notFound ? (
                            allRecipes?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
                                <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} size="bigger" onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
                            ))
                            ) : (
                            <NotFoundText>Não encontramos receitas com esse nome...</NotFoundText>
                        )}
                        
                    </RecipeContainer>   )}
                </Container>
            </ScrollView>
        </View>
    )
}