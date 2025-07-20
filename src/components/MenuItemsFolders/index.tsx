import { Container, TextItem } from "./style";
import React from "react";

interface MenuItemsFoldersProps {
  name: string,
  onPress?: () => void,
  isTransparent?: boolean
}


export default function MenuItemsFolders({ name, onPress, isTransparent = true }: MenuItemsFoldersProps) {
  const containerStyle = {
    backgroundColor: isTransparent ? "transparent" : "#f3f2f2"
  };

  return (
    <Container onPress={onPress} style={containerStyle}>
      <TextItem>{name}</TextItem>
    </Container>
  );
}