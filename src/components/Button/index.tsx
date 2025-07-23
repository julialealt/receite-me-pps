import type { GestureResponderEvent } from "react-native";
import { ScopeButton, TextButton } from "./styles";
import React from "react";

interface ButtonProps {
  labelButton: string,
  onPress?: (event: GestureResponderEvent) => void,
  width?: number,
  height?: number,
  radius?: number,
  disabled?: boolean,
  bgColor?: string,
  color?: string,
}

export default function Button({ labelButton, onPress, width, height, radius, disabled, bgColor, color }: ButtonProps) {
  return (
    <ScopeButton width={width} height={height} radius={radius} onPress={onPress} disabled={disabled} bgColor={bgColor}>
      <TextButton color={color}>{labelButton}</TextButton>
    </ScopeButton>
  );
}