import { Container, ImageRecipe, TextRecipe, TextTimer } from "./styles";

interface RecipeProps {
    label?: string,
    icon?: any,
    time?: string,
}

export default function RecipeButton({label, icon, time}: RecipeProps) {
    return(
        <Container>
            <ImageRecipe source={icon} />
            <TextRecipe>{label}</TextRecipe>
            <TextTimer>{time}</TextTimer>
        </Container>
    )
}
