import {CustomScrollView as ScrollView } from "../../../globalStyles";
import AddIngredientsButton from "../../components/AddIngredientsButton";
import AddIngredients from "../../components/AddIngredientsButton";
import SelectFilter from "../../components/SelectFilter";
import { ButtonContainer, Container, IngredientsContainer, TitleText } from "./styles";
import SelectedIngredient from "../../components/SelectedIngredient";
import Button from "../../components/Button";
import { useEffect, useState } from "react";

interface Ingredient {
    id: number;
    ingredients: string;
}

const data: Ingredient[] = [
    { id: 1, ingredients: "Farinha" },
    { id: 2, ingredients: "Açúcar" },
    { id: 3, ingredients: "Leite" },
    { id: 4, ingredients: "Ovos" },
    { id: 5, ingredients: "Manteiga" },
    { id: 6, ingredients: "Fermento em pó" },
    { id: 7, ingredients: "Sal" },
    { id: 8, ingredients: "Chocolate" },
    { id: 9, ingredients: "Canela" },
    { id: 10, ingredients: "Óleo vegetal" },
    { id: 11, ingredients: "Framboesas" },
    { id: 12, ingredients: "Amêndoas" },
    { id: 13, ingredients: "Baunilha" },
    { id: 14, ingredients: "Limão" },
    { id: 15, ingredients: "Coco ralado" },
];

export default function SearchByIngredients() {
    const [addIngredient, setAddIngredient] = useState(false);
    const [ingredientsArray, setIngredientsArray] = useState<Ingredient[]>([])

    const handleRemoveIngredientsArray = (id: number) => {
        const FilteredIngredientsArray = ingredientsArray.filter(value => value.id !== id);
        setIngredientsArray(FilteredIngredientsArray);
    }

    return(
        <ScrollView>
            <Container>
                <TitleText>Quais ingredientes você tem disponíveis ?</TitleText>
                <AddIngredientsButton onPress={() => setAddIngredient(!addIngredient)} />
                <SelectFilter show={addIngredient ? 'flex' : 'none'} arrayIngredients={data} ingredientsArray={ingredientsArray} addIngredient={setIngredientsArray}/>
                <IngredientsContainer>
                    {ingredientsArray.map(({id, ingredients}) => (
                        <SelectedIngredient key={id} label={ingredients} onPress={() => handleRemoveIngredientsArray(id)} />
                    ))}
                </IngredientsContainer>
                <ButtonContainer>
                    <Button labelButton="Pesquisar  >" height={70} width={240} radius={50}/>
                </ButtonContainer>
            </Container>
        </ScrollView>
    )
}