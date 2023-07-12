import { Text, TextInput, View } from "react-native";
import { Container, InputText, TextMain} from "./styles";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<typeof TextInput> {
    label?: string,
    type?: 'text' | 'email' | 'password';
}


export default function Input({label, type = 'text', ...props}: InputProps) {
    return (
        <Container>
            <TextMain>{label}</TextMain>
            <InputText 
            {...props} 
            keyboardType={type === 'email' ? 'email-address' : 'default'}
            secureTextEntry={type === 'password'}
            />
        </Container>
    )
}