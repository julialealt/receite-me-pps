import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { ScopeButton, TextButton } from "./styles";

interface ButtonProps {
    labelButton: string,
    onPress?: (event: GestureResponderEvent) => void,
}

export default function SliderButton({ labelButton, onPress}: ButtonProps) {
    return (
        <ScopeButton onPress={onPress}>
            <TextButton>{labelButton}</TextButton>
        </ScopeButton>

    );
}