import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerButton, ContainerTitle, ContainerWarning, ImageWarning, LoginText, SubText, WarningText } from "./styles";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { propsStack } from '../../routes/Models';
import React from "react";
import type { SignUpData } from "../../types";
import { authService } from "../../services/authService";

export interface FormData {
  nome: string;
  email: string;
  bio: string;
  senha: string;
  confirmarSenha: string;
}

export default function SignUp() {
  const navigation = useNavigation<propsStack>()

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    bio: 'Receite.me, o melhor app de receitas 👆🏻',
    senha: '',
    confirmarSenha: '',
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSignUp = async () => {
    if (!(formData.nome.length == 0 || formData.email.length == 0 || formData.senha.length == 0 || formData.senha.length == 0)) {
      try {
        const userData: SignUpData = {
          nome: formData.nome,
          email: formData.email,
          bio: formData.bio,
          senha: formData.senha,
        };

        await authService.signUp(userData);

        setSuccess(true);
        setFormData({
          nome: '',
          email: '',
          bio: '',
          senha: '',
          confirmarSenha: '',
        });

      } catch (err) {
        setError("Ocorreu um erro ao criar a conta. Tente novamente.");
        console.error(err);
      }
    }
  };

  const checkButtonEnabled = () => {
    const { nome, email, senha, confirmarSenha } = formData;
    const isAllFields = nome.length > 0 && email.length > 0 && senha.length > 0 && confirmarSenha.length > 0 && senha.length >= 8 && senha == confirmarSenha;
    if (senha.length >= 8) {
      setError("Preencha todos os campos obrigatórios");
    } else {
      setError("A senha deve incluir no mínimo 8 caracteres");
    }
    setIsButtonEnabled(isAllFields);
  }

  useEffect(() => {
    if (success) {
      navigation.navigate("Login");
      setSuccess(false);
    }
  }, [success, navigation]);

  useEffect(() => {
    checkButtonEnabled()
  })

  return (
    <Container>
      <ContainerTitle>
        <LoginText>Sign up</LoginText>
        <Text>‎ ‎ ‎ ‎ ‎ </Text>
        <ContainerWarning>
          <ImageWarning source={require('../../assets/geral/errorOutline.png')} />
          <WarningText>{error}</WarningText>
        </ContainerWarning>
      </ContainerTitle>
      <Input label="Nome" type="text" placeholder="Insira seu nome"
        value={formData.nome}
        onChangeText={value => {
          handleInputChange('nome', value);
          checkButtonEnabled();
        }}
        required={true}
      />
      <Input label="Email" keyboardType="email-address" placeholder="Insira seu email"
        value={formData.email}
        onChangeText={value => {
          handleInputChange('email', value);
          checkButtonEnabled();
        }}
        required={true}
      />
      <Input label="Senha" type="password" placeholder="Insira uma senha"
        value={formData.senha}
        onChangeText={value => {
          handleInputChange('senha', value);
          checkButtonEnabled();
        }}
        required={true}
      />
      <Input label="Confirmar senha" type="password" placeholder="Confirme sua senha"
        value={formData.confirmarSenha}
        onChangeText={value => {
          handleInputChange('confirmarSenha', value);
          checkButtonEnabled();
        }}
        required={true}
      />
      <ContainerButton>
        <Button labelButton="CADASTRAR" onPress={handleSignUp} width={290} height={47} radius={10} disabled={!isButtonEnabled} />
        <SubText>Já possui uma conta? <Weight700
          style={{ color: "#22A36D" }}
          onPress={() => navigation.navigate('Login')}>Entrar agora</Weight700></SubText>
      </ContainerButton>
    </Container>
  )
}