import { Text, TextInput, View } from "react-native";
import { Container, ImageContainer, ImageSearch, InputSearch} from "./styles";
import { ComponentProps } from "react";

interface SearchProps extends ComponentProps<typeof TextInput> {
    label?: string
}


export default function Search({label, ...props}: SearchProps) {
    return (
        <Container>
            <ImageContainer>
                <ImageSearch source={require('../../assets/geral/magnifyingGlass.png')} />
            </ImageContainer>
            <InputSearch {...props} />
        </Container>
    )
}