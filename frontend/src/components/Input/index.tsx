import { Text, TextInput, View } from "react-native";
import { Container, InputText, TextMain} from "./styles";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<typeof TextInput> {
    label?: string
}


export default function Input({label, ...props}: InputProps) {
    return (
        <Container>
            <TextMain>{label}</TextMain>
            <InputText {...props} />
        </Container>
    )
}