import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { IconButton, IconTouchableOpacity, ScopeButton, TextButton } from "./styles";

interface SelectedIngedientProps {
    label: string,
    onPress?: (event: GestureResponderEvent) => void,
}

export default function SelectedIngredient({label, onPress}: SelectedIngedientProps) {
    return(
        <ScopeButton>
            <TextButton>{label}</TextButton>
            <IconTouchableOpacity>
                <IconButton source={require('../../assets/geral/bin.png')} />
            </IconTouchableOpacity>
        </ScopeButton>
    )
}