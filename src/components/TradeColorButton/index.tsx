import { GestureResponderEvent } from "react-native";
import { ScopeButton, TextButton } from "./styles";
import React from "react";

interface TradeColorButtonProps {
  labelButton: string,
  onPress?: (event: GestureResponderEvent) => void,
  color?: boolean,
}

export default function TradeColorButton({ labelButton, onPress, color }: TradeColorButtonProps) {
  return (
    <ScopeButton onPress={onPress} colorButton={color} >
      <TextButton colorButton={color} >{labelButton}</TextButton>
    </ScopeButton>
  );
}