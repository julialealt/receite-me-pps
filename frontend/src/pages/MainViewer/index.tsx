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

const categories = [
    { name: 'Veggie', 
      image: require('../../assets/categories/Broccoli.png')},
    { name: 'Doces', 
      image: require('../../assets/categories/Shortcake.png')},
    { name: 'Sem lactose', 
      image: require('../../assets/categories/GlassOfMilk.png')},
    { name: 'Salgadas', 
      image: require('../../assets/categories/Spaghetti.png')},
    { name: 'Sem glúten', 
      image: require('../../assets/categories/Bread.png')}
  ];

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
    const [recipeData, setRecipeData] = useState<RecipeData[] | null>([{ 
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

    const getRecipeInformations = async () => {
        try {
            const response = await axios.get<RecipeData[]>('https://c708-2804-d4b-9488-2d00-a190-6452-3398-36ba.ngrok-free.app/receitas');
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
                            <TitleText>Vamos cozinhar uma boa receita hoje!</TitleText>
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
                                        <CategoryButton key={index} label={name} Icon={image} onPress={() => navigation.navigate('CategoryRecipes', { category: name })} />
                                    ))}
                                </ScrollCategoryContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Recomendações</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeData?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
                                        <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Receitas recentes</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeData?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
                                        <RecipeButton key={id} label={nome} icon={pathImagem} time={tempoDePreparo} onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
                                    ))}
                                </ScrollContainer>
                            </ScrollView>
                        </TextContainer>
                        <TextContainer>
                            <TitleText>Receitas da semana</TitleText>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ScrollContainer>
                                    {recipeData?.map(({ id, nome, tempoDePreparo, pathImagem }) => (
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
                            <NotFoundText>Não encontramos receitas com os ingredientes selecionados...</NotFoundText>
                        )}
                        
                    </RecipeContainer>   )}
                </Container>
            </ScrollView>
        </View>
    )
}