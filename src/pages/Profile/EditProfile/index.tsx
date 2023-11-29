import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import Input from "../../../components/Input";
import { BackArrow, BackThePage, Container, ContainerChangePassword, ContainerEditProfileInputs, EditProfileText, InputContainer, OverlayContainerButton, OverlayText, OverlayTitle, PadlockImage, PadlockText } from "./styles";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { propsStack } from '../../../routes/Models';
import axios from "axios";
import { apiURL } from "../../../../api";
import { Button as BTOverlay, Overlay } from "@rneui/base";

interface FormData {
    id: number;
    nome: string;
    bio: string;
    email: string;
    senha: string;
    novaSenha: String;
    avatar: any;
}


export default function EditProfile() {
    const navigation = useNavigation<propsStack>()
    const [error, setError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const { data, setNewFormData } = useContext(AuthContext)
    const [formDataEdit, setFormDataEdit] = useState({
        nome: data.nome,
        bio: data.bio,
        email: data.email,
        senha: '',
        novaSenha: '',
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
                    setConfirmPassword(false)
                    navigation.goBack()
                } catch (error) {
                    console.error('Ocorreu um erro ao atualizar o usuário:', error);
                }
            } else {
                setError("Os campos de senha e confirmar senha devem ser iguais")
            }
        }
    }

    const handleChangePasswordConfirmation = async () => {
        if(formDataEdit.novaSenha == formDataEdit.senha) {
            try {
                await axios.patch(`${apiURL}/usuarios/update`, {
                    id: data.id,
                    nome: data.nome,
                    bio: data.bio,
                    email: data.email,
                    senha: formDataEdit.senha,
                });
                setNewFormData(data.id, formDataEdit.nome, formDataEdit.bio, formDataEdit.email)
                setChangePassword(false)
                navigation.goBack()
            } catch (error) {
                console.error('Ocorreu um erro ao atualizar o usuário:', error);
            }
        }
    }

    useEffect(() => {
        console.log(formDataEdit)
    },[formDataEdit])

    return(
        <ScrollView>
            <View>
                <Overlay isVisible={confirmPassword} overlayStyle={{backgroundColor: "#FFFFFF", width: 341, borderRadius: 20}}>
                    <OverlayTitle>Confirmar Senha</OverlayTitle>
                    <OverlayText>Digite sua senha atual para confirmar as alterações.</OverlayText>
                    <InputContainer>
                        <Input 
                        label="Senha" 
                        type="password"
                        secureTextEntry
                        value={formDataEdit.senha}
                        placeholder="insira sua senha" 
                        onChangeText={value => handleInputChange('senha', value)}
                        />
                    </InputContainer>
                    <OverlayContainerButton>
                        <BTOverlay 
                            title="Cancelar" 
                            buttonStyle={{ backgroundColor: 'transparent', borderRadius: 10 }}
                            titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#da2d2d' }}
                            containerStyle={{
                                height: 40,
                                width: 110
                            }}
                            onPress={() => setConfirmPassword(false)}
                        />
                        <BTOverlay 
                        title="Enviar" 
                        buttonStyle={{
                            backgroundColor: '#22A36D', borderRadius: 5
                        }}
                        titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#FFFFFF' }}
                        containerStyle={{
                            height: 40,
                            width: 110
                        }}
                        onPress={handleInputConfirmation}
                        />

                    </OverlayContainerButton>
                    
                </Overlay>

                <Overlay isVisible={changePassword} overlayStyle={{backgroundColor: "#FFFFFF", width: 341, borderRadius: 20}}>
                    <OverlayTitle style={{marginBottom: 20}}>Alterar Senha</OverlayTitle>
                    <InputContainer>
                        <Input 
                            label="Nova senha" 
                            type="password"
                            secureTextEntry
                            value={formDataEdit.senha}
                            placeholder="insira sua nova senha" 
                            onChangeText={value => handleInputChange('senha', value)}
                        />

                        <Input
                            label="Confirmar nova Senha"
                            type="password"
                            secureTextEntry
                            value={formDataEdit.novaSenha}
                            placeholder="Confirme sua nova senha"
                            onChangeText={value => handleInputChange('novaSenha', value)}
                        />
                        <Text>{error}</Text>
                    </InputContainer>
                    <OverlayContainerButton>
                        <BTOverlay 
                            title="Cancelar" 
                            buttonStyle={{ backgroundColor: 'transparent', borderRadius: 10 }}
                            titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#da2d2d' }}
                            containerStyle={{
                                height: 40,
                                width: 110
                            }}
                            onPress={() => setChangePassword(false)}
                        />
                        <BTOverlay 
                        title="Enviar" 
                        buttonStyle={{
                            backgroundColor: '#22A36D', borderRadius: 5
                        }}
                        titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#FFFFFF' }}
                        containerStyle={{
                            height: 40,
                            width: 110
                        }}
                        onPress={handleChangePasswordConfirmation}
                        />

                    </OverlayContainerButton>
                    
                </Overlay>
            </View>

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
                </ContainerEditProfileInputs>
                <ContainerChangePassword onPress={() => setChangePassword(true)}>
                    <PadlockImage source={require('../../../assets/geral/padlock.png')} />
                    <PadlockText>Alterar senha</PadlockText>
                </ContainerChangePassword>
                
                <Button labelButton="Salvar alterações" width={290} height={47} radius={12} onPress={() => setConfirmPassword(true)}/>
            </Container>
        </ScrollView>
    )
}