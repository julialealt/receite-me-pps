import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Input from "../../components/Input";
import { BackThePage, ButtonContainer, Container, ContainerButton, EsqueciSenha, InputContainer, LoginText, SubText, TextPopUp, TitlePopUp } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth"
import { propsStack } from '../../routes/Models';
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Overlay } from "@rneui/base";
import React from "react";
import { userService } from "../../services/userService";
import { ButtonFactory } from "../../factories/ButtonFactory";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const navigation = useNavigation<propsStack>();
  const { signIn } = useContext(AuthContext)
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [codeReset, setCodeReset] = useState("");

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const sendEmailToResetPassword = async (email: string) => {
    try {
      await userService.sendEmailToResetPassword(email);
      setIsVisible(false)
      navigation.navigate("RecoveryPassword", { email: email });

    } catch (error) {
      console.error("Error de requisição: ", error);
      throw error;
    }
  }

  const handleLogin = async () => {
    signIn(formData.email, formData.password)
      .then((result) => {
        if (result) {
          navigation.navigate("Tab");
          setFormData({
            email: "",
            password: ""
          })
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  };

  useEffect(() => {
    console.log(resetPasswordEmail)
  }, [resetPasswordEmail])



  return (
    <Container>
      <View>
        <Overlay
          isVisible={isVisible}
          overlayStyle={{ backgroundColor: "#FFFFFF", width: 341, height: 310, borderRadius: 20 }}>
          <TitlePopUp>Recuperação de senha</TitlePopUp>
          <TextPopUp>Informe o email cadastrado na sua conta e enviaremos um código para você redefinir sua senha.</TextPopUp>
          <InputContainer>
            <Input type={"email"} placeholder={"Insira seu email"} value={resetPasswordEmail} onChangeText={(value: string) => setResetPasswordEmail(value)} />
          </InputContainer>
          <ButtonContainer>
            <ButtonFactory
              type="secondary"
              label="Cancelar"
              size="small"
              onPress={() => setIsVisible(false)}
            />
            <ButtonFactory
              type="primary"
              label="Enviar"
              size="small"
              onPress={() => sendEmailToResetPassword(resetPasswordEmail)}
            />
          </ButtonContainer>
        </Overlay>
      </View>

      <BackThePage>
        <LoginText>Login</LoginText>
      </BackThePage>
      <Input label="Email" type="email" placeholder="Insira seu email"
        value={formData.email}
        onChangeText={value => handleInputChange('email', value)}
        required={true} />
      <Input label="Senha" type="password" placeholder="Insira sua senha"
        value={formData.password}
        onChangeText={value => handleInputChange('password', value)}
        required={true} />
      <ContainerButton>
        <ButtonFactory type="primary" label="ENTRAR" onPress={handleLogin} />
      </ContainerButton>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <EsqueciSenha>Esqueci minha senha</EsqueciSenha>
      </TouchableOpacity>
      <SubText>Ainda não possui uma conta? <Weight700
        style={{ color: "#22A36D" }}
        onPress={() => navigation.navigate('SignUp')}>Criar conta</Weight700></SubText>
    </Container>

  )
}