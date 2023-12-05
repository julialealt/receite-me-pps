import { View, Text } from "react-native";
import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import { BlackLine, ButtonContainer, ClickArrowLeft, ClickLogos2, Container, ContainerArrow, ContainerPencil, LogosContainer, LogosContainer2, OverlayArrowLeft, OverlayTitle, PencilIcon, UserContainer, 
        UserFunctionsIconContainer, UserFunctionsList, UserFunctionsText, 
        UserIcon, UserLogo, UserLogoOverlay, UserLogoOverlay2, UserName, UserStatus } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { Ionicons } from '@expo/vector-icons';
import { Button, Overlay } from '@rneui/themed';

import { propsStack } from '../../../routes/Models';
import axios from "axios";
import { apiURL } from "../../../../api";
import PopUp from "../../../components/PopUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import MenuItemsFolders from "../../../components/MenuItemsFolders";

interface ProfileProps {
  id: number,
  text: string,
  icon: any,
  command: any
}

export default function MainProfile() {
    const navigation = useNavigation<propsStack>();
    const { data, clearFormData, setNewFormData } = useContext(AuthContext)

    const [visible, setVisible] = useState(false);
    const [visibleOverlay, setVisibleOverlay] = useState(false);
    const toggleOverlay = () => {
      setVisible(!visible);
    }

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
        command: toggleOverlay

      },
    ];

    const avatarMappings: any = {
      1: require('../../../assets/Users/Janet.png'),
      2: require('../../../assets/Users/Hansel.png'),
      3: require('../../../assets/Users/Conan.png'),
      4: require('../../../assets/Users/Ruby.png'),
      5: require('../../../assets/Users/Jonas.png'),
    };
    
    const handleLogout = () => {
      clearFormData();
      navigation.navigate("Login");
    }

    const handleDeleteUser = async (id: number) => {
      try {
        const token = await AsyncStorage.getItem('@token'); 
        const response = await axios.delete(`${apiURL}/usuarios/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
        navigation.navigate("SignUp");
      } catch (error) {
        console.error(error);
      }
    };

    const handleEditAvatar = async(value: string) => {
      try {
        const token = await AsyncStorage.getItem('@token'); 
        const response = await axios.patch(
          'https://receitemebackend.onrender.com/usuarios/update',
          {
            id: data.id,
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            bio: data.bio,
            avatar: value,
            cargo: "USER"
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setNewFormData(data.id, data.nome, data.bio, data.email, value)

        console.log('Solicitação bem-sucedida!');

        setVisibleOverlay(false);
      } catch(error) {
        console.error(error);
      }
    }

    useEffect(() => {

    })

    return(
      <View>
        <ScrollView>
            <View>
              <Overlay isVisible={visibleOverlay} overlayStyle={{backgroundColor: "#FFFFFF", width: 300, height: 362, borderRadius: 20}}>
                <ContainerArrow>
                  <ClickArrowLeft onPress={() => setVisibleOverlay(false)}>
                    <OverlayArrowLeft source={require("../../../assets/geral/arrowLeft.png")} />
                  </ClickArrowLeft>
                  <OverlayTitle>Escolha seu personagem</OverlayTitle>
                </ContainerArrow>
                <UserLogoOverlay source={avatarMappings[parseInt(data.avatar)]} />
                <BlackLine></BlackLine>
                <LogosContainer>
                  <ClickLogos2 onPress={() => handleEditAvatar("1")}>
                    <UserLogoOverlay2 source={avatarMappings[1]} />
                  </ClickLogos2>
                  <ClickLogos2 onPress={() => handleEditAvatar("2")}>
                    <UserLogoOverlay2 source={avatarMappings[2]} />
                  </ClickLogos2>
                  <ClickLogos2 onPress={() => handleEditAvatar("3")}>
                    <UserLogoOverlay2 source={avatarMappings[3]} />
                  </ClickLogos2>
                </LogosContainer>
                <LogosContainer2>
                  <ClickLogos2 onPress={() => handleEditAvatar("4")}>
                    <UserLogoOverlay2 source={avatarMappings[4]} />
                  </ClickLogos2>
                  <ClickLogos2 onPress={() => handleEditAvatar("5")}>
                    <UserLogoOverlay2 source={avatarMappings[5]} />
                  </ClickLogos2>
                  
                  <UserLogoOverlay2 />
                </LogosContainer2>
              </Overlay>
            </View>
            <PopUp 
            text={"Você deseja mesmo excluir sua conta?"} isVisible={visible} 
            handleDeleteUser={() => handleDeleteUser(data.id)} onPressBackDrop={toggleOverlay} id={data.id} />
            <Container>
                <UserContainer>
                    <UserLogo source={avatarMappings[parseInt(data.avatar)]} />
                    <ContainerPencil onPress={() => setVisibleOverlay(true)}>
                      <PencilIcon source={require('../../../assets/geral/lapis.png')} />
                    </ContainerPencil>

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