import { ButtonContainer, Container, ContainerScrollView, IngredientsContainer, TitleText } from "./styles";
import AddIngredientsButton from "../../components/AddIngredientsButton";
import SelectFilter from "../../components/SelectFilter";
import SelectedIngredient from "../../components/SelectedIngredient";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from '../../routes/Models';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "../../lib/axios";
import React from "react";
import type { Ingredient } from "../../types";
import { ingredientService } from "../../services/ingredientService";


interface IngredientName {
  id: number;
  ingredients: string;
}


export default function SearchByIngredients() {
  const navigation = useNavigation<propsStack>();
  const [addIngredient, setAddIngredient] = useState(false);
  const [allIngredients, setAllIngredients] = useState<IngredientName[]>([]);
  const [ingredientsArray, setIngredientsArray] = useState<IngredientName[]>([]);

  const getIngredients = async () => {
    try {
      const response = await ingredientService.getIngredients()
      const ingredients: IngredientName[] = response.map(({ id, nome }: { id: number, nome: string }) => ({ id, ingredients: nome }));
      setAllIngredients(ingredients);
    } catch (error) {
      console.error('Erro ao obter ingredientes:', error);
    }
  };

  const handleRemoveIngredientsArray = (id: number) => {
    const FilteredIngredientsArray = ingredientsArray.filter(value => value.id !== id);
    setIngredientsArray(FilteredIngredientsArray);
  }

  useEffect(() => {
    getIngredients()
  }, [])

  useEffect(() => {
    setAddIngredient(false);
  }, [ingredientsArray])

  return (
    <View>
      <ContainerScrollView>
        <Container>
          <TitleText>Quais ingredientes você tem disponíveis?</TitleText>
          <AddIngredientsButton onPress={() => setAddIngredient(!addIngredient)} />
          <SelectFilter show={addIngredient ? 'flex' : 'none'} arrayIngredients={allIngredients} ingredientsArray={ingredientsArray} addIngredient={setIngredientsArray} />
          <IngredientsContainer>
            {ingredientsArray.map(({ id, ingredients }) => (
              <SelectedIngredient key={id} label={ingredients} onPress={() => handleRemoveIngredientsArray(id)} />
            ))}
          </IngredientsContainer>
          <ButtonContainer>
            <Button labelButton="PESQUISAR  >" height={50} width={200} radius={50} onPress={() => navigation.navigate('RecipesByIngredients', { ingredients: ingredientsArray.map(item => item.ingredients) })} />
          </ButtonContainer>
        </Container>
      </ContainerScrollView>
    </View>
  )
}