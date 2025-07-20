import styled from 'styled-components/native';
import { ReactNode } from 'react';
import { ScrollView, ScrollViewProps } from "react-native";
import React from 'react';

type CustomScrollViewProps = ScrollViewProps & {
  children: ReactNode;
};

export const Weight700 = styled.Text`
    font-weight: 700;
`

export const CustomScrollView: React.FC<CustomScrollViewProps> = ({ children, ...props }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }} {...props}>
      {children}
    </ScrollView>
  );
};

