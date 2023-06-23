import { ScopeButton, TitleButton } from "./styles";

interface SelectIngredientButtonProps {
    name: string,
    onPress?: () => void,
}

export default function SelectIngredientButton({name, onPress}: SelectIngredientButtonProps) {
    return(
        <ScopeButton onPress={() => console.log("Olá")} >
            <TitleButton>{name}</TitleButton>
        </ScopeButton>
    )
}