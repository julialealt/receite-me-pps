import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import { Container, SelectButtonFlatList, SelectButtonImage, SelectButtonScope, SelectButtonTextInput, SelectButtonTouchableOpacity, SelectButttonFlatListText } from './styles';

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

export default function SelectFilter() {
    const [filterText, setFilterText] = useState('');
    const [formatedData, setFormatedData] = useState<Ingredient[]>(data);
    const [isFocused, setIsFocused] = useState(false);
  
    const renderItem = ({ item }: { item: Ingredient }) => (
      <SelectButttonFlatListText>{item.ingredients}</SelectButttonFlatListText>
    );
  
    const handleFilter = (text: string) => {
      setFilterText(text);
      const filteredData = data.filter((item) =>
        item.ingredients.toLowerCase().includes(text.toLowerCase())
      );
      setFormatedData(filteredData);
    };
  
    useEffect(() => {
    }, [isFocused]);
  
    return (
      <Container>
        <SelectButtonScope isFocused={isFocused}>
          <SelectButtonTextInput
            placeholder="Selecione um ingrediente"
            placeholderTextColor="#a9a9a9"
            value={filterText}
            onChangeText={handleFilter}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <SelectButtonTouchableOpacity
            onPress={() => setIsFocused(!isFocused)}
            style={{ display: 'flex', alignItems: 'center', width: 50 }}
          >
            <SelectButtonImage source={require('../../assets/geral/arrowDown.png')} />
          </SelectButtonTouchableOpacity>
        </SelectButtonScope>
        {isFocused && (
          <SelectButtonFlatList
            data={formatedData}
            renderItem={renderItem}
            keyExtractor={(item: { id: number; }) => item.id}
          />
        )}
      </Container>
    );
  };
  
