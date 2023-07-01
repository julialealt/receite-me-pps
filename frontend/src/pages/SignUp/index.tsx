import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerButton, LoginText, SubText } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Text } from "react-native";
import { propsStack } from '../../routes/Models';
import { apiURL } from "../../../api";

interface FormData {
    nome: string;
    email: string;
    bio: string;
    senha: string;
  }

export default function SignUp() {
  const navigation = useNavigation<propsStack>()

  const [formData, setFormData] = useState<FormData>({
      nome: '',
      email: '',
      bio: 'Receite.me, o melhor app de receitas 👆🏻',
      senha: '',
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (name: keyof FormData, value: string) => {
      setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
  }

  const handleSignUp = () => {
    if(!(formData.nome.length == 0 || formData.email.length == 0 || formData.senha.length == 0)) {
      axios
        .post(`${apiURL}/usuarios`, formData)
        .then((response) => {
          setSuccess(true);
          setFormData({
            nome: '',
            email: '',
            bio: '',
            senha: '',
          })
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  
  useEffect(() => {
    if (success) {
      navigation.navigate("Login");
      setSuccess(false);
    }
  }, [success, navigation]);

  return(
      <Container>
          <LoginText>Sign up</LoginText>
          <Input label="Nome" type="text" placeholder="João" 
              value={formData.nome}
              onChangeText={value => handleInputChange('nome', value)}
          />
          <Input label="Email" keyboardType="email-address" placeholder="joao@gmail.com"
              value={formData.email}
              onChangeText={value => handleInputChange('email', value)}
          />
          <Input label="Senha" type="password" placeholder="*********"
              value={formData.senha}
              onChangeText={value => handleInputChange('senha', value)}
          />
          <ContainerButton>
              <Button labelButton="CADASTRAR" onPress={handleSignUp} width={200} height={47} radius={10} />
              <SubText>Já possui uma conta? <Weight700 
              style={{color: "#22A36D"}} 
              onPress={() => navigation.navigate('Login')}>Entre agora</Weight700></SubText>
          </ContainerButton>
      </Container>
  )
}