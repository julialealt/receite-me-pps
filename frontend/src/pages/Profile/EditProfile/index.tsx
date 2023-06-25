import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import Input from "../../../components/Input";
import { BackArrow, BackThePage, Container, ContainerEditProfileInputs, EditProfileText } from "./styles";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";

interface FormData {
    nome: string;
    bio: string;
    email: string;
}

export default function EditProfile() {
    const navigation = useNavigation()
    const { data } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        nome: data.name,
        bio: data.bio,
        email: data.email,
    })

    const handleInputChange = (name: keyof FormData, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
          }));
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return(
        <ScrollView>
            <Container>
                <BackThePage>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <BackArrow source={require("../../../assets/geral/arrowLeft.png")} />
                    </TouchableOpacity>
                    <EditProfileText>Editar Perfil</EditProfileText>
                    <Text>‎ ‎ ‎ ‎ </Text>
                </BackThePage>
                <ContainerEditProfileInputs>
                    <Input
                        label="Nome"
                        placeholder="Rossana Andrade"
                        value={formData.nome}
                        onChangeText={value => handleInputChange('nome', value)}
                    />
                    <Input
                        label="Bio"
                        placeholder="Alguma bio ou status"
                        value={formData.bio}
                        onChangeText={value => handleInputChange('bio', value)}
                    />
                    <Input
                        label="Email"
                        placeholder="rossanaandrade@gmail.com"
                        value={formData.email}
                        onChangeText={value => handleInputChange('email', value)}
                    />
                    <Input label="Senha atual" />
                    <Input label="Nova senha" />
                    <Input label="confirme nova senha" />
                </ContainerEditProfileInputs>
                <Button labelButton="Salvar alterações" width={290} height={47} radius={12} />
            </Container>
        </ScrollView>
    )
}