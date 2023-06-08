import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
    Container,
    SelectButtonFlatList,
    SelectButtonImage,
    SelectButtonScope,
    SelectButtonTextInput,
    SelectButtonTouchableOpacity,
    SelectButttonFlatListText,
} from "./styles";

interface SelectFilterProps {
    arrayIngredients?: Ingredient[],
    show: "none" | "flex"
}
interface Ingredient {
    id: number;
    ingredients: string;
}

const data: Ingredient[] = [
    { id: 1, ingredients: 'Farinha' },
    { id: 2, ingredients: 'Açúcar' },
    { id: 3, ingredients: 'Leite' },
    { id: 4, ingredients: 'Ovos' },
    { id: 5, ingredients: 'Manteiga' },
    { id: 6, ingredients: 'Fermento em pó' },
    { id: 7, ingredients: 'Sal' },
    { id: 8, ingredients: 'Chocolate' },
    { id: 9, ingredients: 'Canela' },
    { id: 10, ingredients: 'Óleo vegetal' },
    { id: 11, ingredients: 'Framboesas' },
    { id: 12, ingredients: 'Amêndoas' },
    { id: 13, ingredients: 'Baunilha' },
    { id: 14, ingredients: 'Limão' },
    { id: 15, ingredients: 'Coco ralado' }
  ]

export default function SelectFilter({show, arrayIngredients}: SelectFilterProps) {
    const [filterText, setFilterText] = useState('');
    const [formatedData, setFormatedData] = useState<Ingredient[]>(data);
    const [ingredientsArray, setIngredientsArray] = useState<Ingredient[]>([])
    const [selectedIngredientsArray, setSelectedIngredientsArray] = useState<Ingredient[]>([])
    const [isFocused, setIsFocused] = useState(false);

    const renderItem = ({ item }: { item: Ingredient }) => (
        <TouchableOpacity onPressIn={() => handleIngredientsSelectedArray(item)}>
            <SelectButttonFlatListText>{item.ingredients}</SelectButttonFlatListText>
        </TouchableOpacity>
    );
    
    const handleFilter = (text: string) => {
        setFilterText(text);
        const filteredData = data?.filter((item) =>
            item.ingredients.toLowerCase().includes(text.toLowerCase())
        );
        setFormatedData(filteredData);
    };

    const handleIngredientsSelectedArray = (ingredient: Ingredient) => {
        console.log(ingredient);
        if (ingredientsArray.length === 0) {
            setIngredientsArray([ingredient]);
        } else {
            const AddNewIngredientArray = [...ingredientsArray, ingredient];
            const FilteredIngredientsArray = AddNewIngredientArray.filter((value, index) => {
                return AddNewIngredientArray.indexOf(value) === index;
            })
            setIngredientsArray(FilteredIngredientsArray);
        }
        setIsFocused(false);
    }

    // const 

    useEffect(() => {
        console.log(ingredientsArray);
    }, [ingredientsArray]);

    return (
        <ScrollView horizontal={true} style={{display: show === "none" ? "none" : "flex"}} >
            <Container>
                <SelectButtonScope styleIsFocused={isFocused}>
                    <SelectButtonTextInput
                        placeholder="Selecione um ingrediente"
                        placeholderTextColor="#a9a9a9"
                        value={filterText}
                        onChangeText={handleFilter}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <SelectButtonTouchableOpacity onPress={() => setIsFocused(!isFocused)} >
                        <SelectButtonImage source={require("../../assets/geral/arrowDown.png")} />
                    </SelectButtonTouchableOpacity>
                </SelectButtonScope>
                {isFocused && (
                    <SelectButtonFlatList
                        data={formatedData}
                        renderItem={renderItem}
                        keyExtractor={(item: { id: number }) => item.id}
                    />
                    )}
            </Container>
        </ScrollView>
    );
}
