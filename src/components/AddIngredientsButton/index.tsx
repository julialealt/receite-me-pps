import { GestureResponderEvent } from "react-native";
import { ScopeButton, TextButton } from "./styles";
import React from "react";

interface AddIngredientsButtonProps {
  onPress?: (event: GestureResponderEvent) => void,
}

export default function AddIngredientsButton({ onPress }: AddIngredientsButtonProps) {
  return (
    <ScopeButton onPress={onPress} >
      <TextButton>+ Adicionar ingrediente</TextButton>
    </ScopeButton>
  )

}