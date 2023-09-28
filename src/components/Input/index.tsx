import { Text, TextInput, View } from "react-native";
import { Container, InputText, TextContainer, TextError, TextMain} from "./styles";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<typeof TextInput> {
    label?: string,
    type?: 'text' | 'email' | 'password';
    required?: boolean
}


export default function Input({label, type = 'text',required, ...props}: InputProps) {
    return (
        <Container>
            <TextContainer>
                <TextMain>{label}</TextMain>
                <TextError>{required ? '*' : ''}</TextError>
            </TextContainer>
            <InputText 
            {...props} 
            keyboardType={type === 'email' ? 'email-address' : 'default'}
            secureTextEntry={type === 'password'}
            />
        </Container>
    )
}