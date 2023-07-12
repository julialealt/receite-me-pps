import { View } from "react-native";
import { Container, IconCategory, TextCategory } from "./styles";

interface CategoriesProps{
    label?: string,
    Icon?: any,
    onPress?: () => void
}


export default function CategoryButton({label, Icon, onPress}: CategoriesProps) {
    return(
        <Container onPress={onPress} >
            <IconCategory source={Icon} />
            <TextCategory>{label}</TextCategory>
        </Container>
    )
}