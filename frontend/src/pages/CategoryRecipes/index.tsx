import { useNavigation, useRoute } from "@react-navigation/native";
import { CustomScrollView as ScrollView } from "../../../globalStyles";
import RecipeButton from "../../components/RecipeButton";
import { BackArrow, BackThePage, Container, RecipeContainer, TextRecentlyRecipes } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { propsStack } from '../../routes/Models';
import axios from "axios";
import { useEffect, useState } from "react";

type ParamsProps = {
    category: string;
  }

interface RecipeData {
  id: number;    
  name: string;
  time: string;
  image: string;
}

export default function CategoryRecipes() {
    const route = useRoute();
    const navigation = useNavigation<propsStack>()
    const { category } = route.params as ParamsProps;
    const [allRecipes, setAllRecipes] = useState<RecipeData[] | null>([{ 
      id: 0, 
      name: '', 
      time: '', 
      image: '' 
    }]);

    const getRecipeInformations = async () => {
      try {
          const response = await axios.get<RecipeData[]>('https://json-test-phi.vercel.app/recipes');
          const updatedRecipeData = response.data.map(({id, image, name, time}) => {
          if(name.length >= 14) {
              name = name.slice(0, 13) + '...';
          }

          return {
              id: id,
              name: name,
              time: time,
              image: image
          }
          })
          setAllRecipes(updatedRecipeData);

      } catch (error) {
          console.error('Error fetching recipe data:', error);
      }
    }

    useEffect(() => {
      getRecipeInformations()
    }, [])

    return(
      <ScrollView>
        <Container>
          <BackThePage>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
            </TouchableOpacity>
              <TextRecentlyRecipes>{category}</TextRecentlyRecipes>
            <Text>‎ ‎ ‎ ‎ </Text>
          </BackThePage>
          <RecipeContainer>
            {allRecipes?.map(({name, time, image, id}) => (
                <RecipeButton key={id} label={name} icon={image} time={time} size="bigger" onPress={() => navigation.navigate("RecipeInformations", { id: id })} />
            ))}
          </RecipeContainer>
        </Container>
      </ScrollView>
    )
}