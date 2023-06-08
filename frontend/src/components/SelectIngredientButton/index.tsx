import { ScopeButton, TitleButton } from "./styles";

export default function SelectIngredientButton() {
    return(
        <ScopeButton onPress={() => console.log("Olá")} >
            <TitleButton>Cheiro Verde</TitleButton>
        </ScopeButton>
    )
}