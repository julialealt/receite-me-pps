import { Container, ContainerTimer, ImageRecipe, ImageTimer, TextRecipe, TextTimer } from "./styles";

interface RecipeProps {
    label?: string,
    icon?: any,
    time?: string,
    size?: string,
    onPress?: () => void
}

export default function RecipeButton({label, icon, time, size, onPress}: RecipeProps) {
    return(
        <Container size={size} onPress={onPress}>
            <ImageRecipe size={size} source={icon} />
            <TextRecipe>{label}</TextRecipe>
            <ContainerTimer>
                <ImageTimer source={require('../../assets/geral/clock.png')} />
                <TextTimer>{time}</TextTimer>
            </ContainerTimer>
        </Container>
    )
}
