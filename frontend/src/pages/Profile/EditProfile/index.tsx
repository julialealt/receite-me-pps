import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import Input from "../../../components/Input";
import { BackArrow, BackThePage, Container, ContainerEditProfileInputs, EditProfileText } from "./styles";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { propsStack } from '../../../routes/Models';
import axios from "axios";
import { apiURL } from "../../../../api";

interface FormData {
    id: number;
    nome: string;
    bio: string;
    email: string;
    senha: string;
    avatar: any;
}


export default function EditProfile() {
    const navigation = useNavigation<propsStack>()
    const { data, setNewFormData } = useContext(AuthContext)
    const [formDataEdit, setFormDataEdit] = useState({
        nome: data.nome,
        bio: data.bio,
        email: data.email,
        senha: '',
        avatar: ''
    })
    const handleInputChange = (name: keyof FormData, value: string) => {
        setFormDataEdit(prevState => ({
            ...prevState,
            [name]: value,
          }));
    }
    const handleInputConfirmation = async () => {
        if(formDataEdit.nome.length !== 0 && formDataEdit.email.length !== 0 && formDataEdit.senha.length !== 0) {
            if(formDataEdit.senha === data.senha) {
                try {
                    await axios.patch(`${apiURL}/usuarios/update`, {
                        id: data.id,
                        nome: formDataEdit.nome,
                        bio: formDataEdit.bio,
                        email: formDataEdit.email,
                        senha: data.senha,
                    });
                    setNewFormData(data.id, formDataEdit.nome, formDataEdit.bio, formDataEdit.email)
                    navigation.goBack()
                } catch (error) {
                    console.error('Ocorreu um erro ao atualizar o usuário:', error);
                }
            }
        }
    }

    return(
        <ScrollView>
            <Container>
                <BackThePage>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <BackArrow source={require("../../../assets/geral/arrowLeft.png")} />
                    </TouchableOpacity>
                    <EditProfileText>Editar perfil</EditProfileText>
                    <Text>‎ ‎ ‎ ‎ </Text>
                </BackThePage>
                <ContainerEditProfileInputs>
                    <Input
                        label="Nome"
                        placeholder="Rossana Andrade"
                        value={formDataEdit.nome}
                        onChangeText={value => handleInputChange('nome', value)}
                    />
                    <Input
                        label="Bio"
                        placeholder="Alguma bio ou status"
                        value={formDataEdit.bio}
                        onChangeText={value => handleInputChange('bio', value)}
                    />
                    <Input
                        label="Email"
                        placeholder="rossanaandrade@gmail.com"
                        value={formDataEdit.email}
                        onChangeText={value => handleInputChange('email', value)}
                    />
                    <Input
                        label="senha"
                        value={formDataEdit.senha}
                        type="password"
                        onChangeText={value => handleInputChange('senha', value)}
                        secureTextEntry
                    />
                </ContainerEditProfileInputs>
                <Button labelButton="Salvar alterações" width={290} height={47} radius={12} onPress={() => handleInputConfirmation()}/>
            </Container>
        </ScrollView>
    )
}