import { Image, View, ScrollView, Text } from "react-native";
import { Container, CookText, GreetingText, GreetingUserContainer, SearchContainer, UserContainer, UserLogo } from "./styles";
import Search from "../../components/Search";

export default function MainViewer() {
    return(
        <ScrollView>
            <Container>
                <UserContainer>
                    <GreetingUserContainer>
                        <GreetingText>Olá, Rossana</GreetingText>
                        <CookText>Vamos Cozinhar uma boa receita hoje!</CookText>
                    </GreetingUserContainer>
                    <UserLogo source={require('../../assets/Users/Janet.png')} />
                </UserContainer>
                {/* <SearchContainer> */}
                    <Search placeholder="Pesquise por receitas" />
                {/* </SearchContainer> */}
            </Container>
        </ScrollView>
    )
}