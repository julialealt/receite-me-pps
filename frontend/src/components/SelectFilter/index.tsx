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
    TouchableWithoutFeedbackFlatList,
} from "./styles";

interface SelectFilterProps {
    arrayIngredients: Ingredient[],
    show: "none" | "flex",
    ingredientsArray: Ingredient[],
    addIngredient: (ingredients: Ingredient[]) => void
}
interface Ingredient {
    id: number;
    ingredients: string;
}



export default function SelectFilter({show, arrayIngredients, ingredientsArray, addIngredient }: SelectFilterProps) {
    const [filterText, setFilterText] = useState('');
    const [formatedData, setFormatedData] = useState<Ingredient[]>(data);
    const [ingredientsArray, setIngredientsArray] = useState<Ingredient[]>([])
    const [selectedIngredientsArray, setSelectedIngredientsArray] = useState<Ingredient[]>([])
    const [isFocused, setIsFocused] = useState(false);

    const renderItem = ({ item }: { item: Ingredient }) => (
        <TouchableWithoutFeedbackFlatList onPressIn={() => handleAddIngredientsArray(item)}>
            <SelectButttonFlatListText>{item.ingredients}</SelectButttonFlatListText>
        </TouchableWithoutFeedbackFlatList>
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
