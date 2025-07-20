import { GestureResponderEvent } from "react-native";
import { ScopeButton, TextButton } from "./styles";
import React from "react";

interface ButtonProps {
  labelButton: string,
  onPress?: (event: GestureResponderEvent) => void,
  width?: number,
  height?: number,
  radius?: number,
  disabled?: boolean,
}

export default function Button({ labelButton, onPress, width, height, radius, disabled }: ButtonProps) {
  return (
    <ScopeButton width={width} height={height} radius={radius} onPress={onPress} disabled={disabled}>
      <TextButton>{labelButton}</TextButton>
    </ScopeButton>

  );
}