import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { ScopeButton, TextButton } from "./styles";

interface ButtonProps {
    labelButton: string,
    onPress?: (event: GestureResponderEvent) => void,
    width?: number,
    height?: number,
    radius?: number,
}

export default function Button({ labelButton, onPress, width, height, radius}: ButtonProps) {
    return (
        <ScopeButton width={width} height={height} radius={radius} onPress={onPress}>
            <TextButton>{labelButton}</TextButton>
        </ScopeButton>

    );
}