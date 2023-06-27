import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { IconButton, IconTouchableOpacity, ScopeButton, TextButton } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';

interface SelectedIngedientProps {
    label: string,
    onPress?: (event: GestureResponderEvent) => void,
}

export default function SelectedIngredient({label, onPress}: SelectedIngedientProps) {
    return(
        <ScopeButton>
            <TextButton>{label}</TextButton>
            <IconTouchableOpacity onPress={onPress}>
                <FontAwesome5 name="trash" size={20} color="#E74444" />
            </IconTouchableOpacity>
        </ScopeButton>
    )
}