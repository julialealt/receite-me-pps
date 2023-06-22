import { View } from "react-native";
import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import BottomBar from "../../../components/BottomBar";
import { Container, UserContainer, UserFunctionsIconContainer, UserFunctionsList, UserFunctionsText, UserIcon, UserLogo, UserName, UserStatus } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface ProfileProps {
  id: number,
  text: string
  icon: any,
  navigation: () => void
}

export default function MainProfile() {
    const navigation = useNavigation();

    const profiles: ProfileProps[] = [
      { 
        id: 1,
        text: "Editar Perfil", 
        icon: require("../../../assets/profileIcons/Pencil.png"),
        navigation: () => navigation.navigate("editProfile") 

      },
      { 
        id: 2,
        text: "Favoritos", 
        icon: require("../../../assets/profileIcons/Favorite.png"),
        navigation: () => navigation.navigate("favoriteBook") 

      },
      { 
        id: 3,
        text: "Recentemente Visualizadas", 
        icon: require("../../../assets/profileIcons/Document.png"),
        navigation: () => navigation.navigate("recentlyViewed") 

      },
      { 
        id: 4,
        text: "Logout", 
        icon: require("../../../assets/profileIcons/Logout.png"),
        navigation: () => navigation.navigate("favoriteBook") 

      },
      { 
        id: 5,
        text: "Apagar Conta", 
        icon: require("../../../assets/profileIcons/bin.png"),
        navigation: () => navigation.navigate("favoriteBook") 

      },
    ];
    
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
                    {profiles.map(({id, icon, text, navigation}) => (
                        <UserFunctionsIconContainer onPress={navigation} key={id}>
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