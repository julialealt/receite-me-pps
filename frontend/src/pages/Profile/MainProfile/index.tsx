import { View } from "react-native";
import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import { Container, UserContainer, UserFunctionsIconContainer, UserFunctionsList, UserFunctionsText, UserIcon, UserLogo, UserName, UserStatus } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import { Ionicons } from '@expo/vector-icons';

import { propsStack } from '../../../routes/Models';
import axios from "axios";
import { apiURL } from "../../../../api";

interface ProfileProps {
  id: number,
  text: string,
  icon: any,
  command: any
}

export default function MainProfile() {
    const navigation = useNavigation<propsStack>();
    const { data, clearFormData } = useContext(AuthContext)

    const profiles: ProfileProps[] = [
      { 
        id: 1,
        text: "Editar perfil", 
        icon: "md-pencil-sharp",
        command: () => navigation.navigate("EditProfile") 

      },
      { 
        id: 2,
        text: "Favoritos", 
        icon: "heart-outline",
        command: () => navigation.navigate("Favorites") 

      },
      { 
        id: 3,
        text: "Recentemente visualizadas", 
        icon: "ios-newspaper-outline",
        command: () => navigation.navigate("RecentlyViewed") 

      },
      { 
        id: 4,
        text: "Logout", 
        icon: "log-out-outline",
        command: () => handleLogout()

      },
      { 
        id: 5,
        text: "Excluir conta", 
        icon: "ios-trash-outline",
        command: () => handleDeleteUser(data.id)

      },
    ];
    
    const handleLogout = () => {
      clearFormData();
      navigation.navigate("Login");
    }

    const handleDeleteUser = async (id: number) => {
      try {
        const response = await axios.delete(`${apiURL}/usuarios/${id}`);
        navigation.navigate("SignUp");
      } catch (error) {
        console.error(error);
      }
    };

    return(
      <View>
        <ScrollView>
            <Container>
                <UserContainer>
                    <UserLogo source={require('../../../assets/Users/Janet.png')} />
                    <UserName>
                      {data.nome && data.nome.split(' ')[0]}
                      {data.nome && data.nome.split(' ')[1] && " " + data.nome.split(' ')[1]}
                    </UserName>
                    <UserStatus>{data.bio}</UserStatus>
                </UserContainer>
                <UserFunctionsList>
                    {profiles.map(({id, icon, text, command}) => (
                        <UserFunctionsIconContainer onPress={command} key={id}>
                            <Ionicons name={icon} size={22} color="black" />
                            <UserFunctionsText>{text}</UserFunctionsText>
                        </UserFunctionsIconContainer>
                    ))}
                </UserFunctionsList>
            </Container>
        </ScrollView>
      </View>
    )
}