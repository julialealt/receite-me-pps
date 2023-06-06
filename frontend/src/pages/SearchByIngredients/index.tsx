import { ScrollView } from "react-native";
import AddIngredientsButton from "../../components/AddIngredientsButton";
import AddIngredients from "../../components/AddIngredientsButton";
import SelectFilter from "../../components/SelectFilter";
import { Container, TitleText } from "./styles";

export default function SearchByIngredients() {
    return(
        <Container>
            <TitleText>Quais ingredientes você tem disponíveis ?</TitleText>
            <AddIngredientsButton />
            <ScrollView>
                <SelectFilter />
            </ScrollView>
        </Container>
    )
}