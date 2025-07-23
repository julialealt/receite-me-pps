import { CustomScrollView as ScrollView } from "../../../../globalStyles";
import Input from "../../../components/Input";
import { BackArrow, BackThePage, Container, ContainerChangePassword, ContainerEditProfileInputs, EditProfileText, InputContainer, OverlayContainerButton, OverlayText, OverlayTitle, PadlockImage, PadlockText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { propsStack } from '../../../routes/Models';
import { Overlay } from "@rneui/base";
import React from "react";
import { authService } from "../../../services/authService";
import { userService } from "../../../services/userService";
import { ButtonFactory } from "../../../factories/ButtonFactory";

export interface FormDataUpdate {
  id: number;
  nome: string;
  bio: string;
  email: string;
  senha: string;
  novaSenha: string;
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
    avatar: data.avatar
  })
  const handleInputChange = (name: keyof FormDataUpdate, value: string) => {
    setFormDataEdit(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleInputConfirmation = async () => {
    if (formDataEdit.nome.length !== 0 && formDataEdit.email.length !== 0 && formDataEdit.senha.length !== 0) {
      const response = await authService.passwordConfirmation(data.email, formDataEdit.senha)

      if (response.data) {
        console.log(data.senha);
        try {
          await userService.updateUserProfile(data.id, formDataEdit.nome, formDataEdit.bio, formDataEdit.email, formDataEdit.senha, formDataEdit.avatar)

          setNewFormData(data.id, formDataEdit.nome, formDataEdit.bio, formDataEdit.email, formDataEdit.avatar)
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
    if (formDataEdit.novaSenha == formDataEdit.senha) {
      try {
        await userService.updateUserPassword(data.email, formDataEdit.senha)

        setChangePassword(false)
        navigation.goBack()
      } catch (error) {
        console.error('Ocorreu um erro ao atualizar o usuário:', error);
      }
    }
  }

  useEffect(() => {
    console.log(formDataEdit)
  }, [formDataEdit])

  return (
    <ScrollView>
      <View>
        <Overlay isVisible={confirmPassword} overlayStyle={{ backgroundColor: "#FFFFFF", width: 341, borderRadius: 20 }}>
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
            <ButtonFactory
              type="secondary"
              label="Cancelar"
              size="small"
              onPress={() => setConfirmPassword(false)}
            />
            <ButtonFactory
              type="primary"
              label="Enviar"
              size="small"
              onPress={handleInputConfirmation}
            />
          </OverlayContainerButton>

        </Overlay>

        <Overlay isVisible={changePassword} overlayStyle={{ backgroundColor: "#FFFFFF", width: 341, borderRadius: 20 }}>
          <OverlayTitle style={{ marginBottom: 20 }}>Alterar Senha</OverlayTitle>
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
            <ButtonFactory
              type="secondary"
              label="Cancelar"
              size="small"
              onPress={() => setChangePassword(false)}
            />
            <ButtonFactory
              type="primary"
              label="Enviar"
              size="small"
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

        <ButtonFactory type="primary" label="Salvar alterações" onPress={() => setConfirmPassword(true)} />
      </Container>
    </ScrollView>
  )
}