import { Container, ContainerTimer, ImageRecipe, ImageTimer, TextRecipe, TextTimer } from "./styles";

interface RecipeProps {
    label?: string,
    icon?: any,
    time?: string,
    size?: string,
}

export default function RecipeButton({label, icon, time, size}: RecipeProps) {
    return(
        <Container size={size}>
            <ImageRecipe size={size} source={icon} />
            <TextRecipe>{label}</TextRecipe>
            <ContainerTimer>
                <ImageTimer source={require('../../assets/geral/clock.png')} />
                <TextTimer>{time}</TextTimer>
            </ContainerTimer>
        </Container>
    )
}
