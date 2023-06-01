import { View } from "react-native";
import { Container, IconCategory, TextCategory } from "./styles";

interface CategoriesProps{
    label?: string,
    Icon?: any,
}


export default function CategoryButton({label, Icon}: CategoriesProps) {
    return(
        <Container>
            <IconCategory source={Icon} />
            <TextCategory>{label}</TextCategory>
        </Container>
    )
}