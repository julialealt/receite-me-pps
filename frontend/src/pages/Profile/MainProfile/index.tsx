import { View } from "react-native";
import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import BottomBar from "../../../components/BottomBar";
import { Container, UserContainer, UserFunctionsIconContainer, UserFunctionsList, UserFunctionsText, UserIcon, UserLogo, UserName, UserStatus } from "./styles";

const profiles = [
    { text: "Editar Perfil", 
      icon: require("../../../assets/profileIcons/Pencil.png") },
    { text: "Favoritos", 
      icon: require("../../../assets/profileIcons/Favorite.png") },
    { text: "Recentemente Visualizadas", 
      icon: require("../../../assets/profileIcons/Document.png") },
    { text: "Logout", 
      icon: require("../../../assets/profileIcons/Logout.png") },
    { text: "Apagar Conta", 
      icon: require("../../../assets/profileIcons/bin.png") },
  ];

export default function MainProfile() {
    return(
      <View>
        <ScrollView>
            <Container>
                <UserContainer>
                    <UserLogo source={require('../../../assets/Users/Janet.png')} />
                    <UserName>Rossana Andrade</UserName>
                    <UserStatus>Apaixonada por não morrer de fome</UserStatus>
                </UserContainer>
                <UserFunctionsList>
                    {profiles.map(({text, icon}, index) => (
                        <UserFunctionsIconContainer key={index}>
                            <UserIcon source={icon} />
                            <UserFunctionsText>{text}</UserFunctionsText>
                        </UserFunctionsIconContainer>
                    ))}
                </UserFunctionsList>
            </Container>
        </ScrollView>
        <BottomBar />
      </View>
    )
}