import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerButton, LoginText, SubText } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Text } from "react-native";
interface FormData {
    nome: string;
    email: string;
    password: string;
  }

export default function SignUp() {
    const navigation = useNavigation()

    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        password: '',
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
        axios
          .post("http://localhost:3000/users", formData)
          .then((response) => {
            console.log(response.data);
            setSuccess(true);
          })
          .catch((error) => {
            console.log(error);
            setError("Erro ao cadastrar. Verifique os dados e tente novamente.");
          });
      };
    
      useEffect(() => {
        if (success) {
          navigation.navigate("login");
        }
      }, [success, navigation]);

    return(
        <Container>
            <LoginText>Sign up</LoginText>
            <Input label="Nome" type="text" placeholder="João" 
                value={formData.nome}
                onChangeText={value => handleInputChange('nome', value)}
            />
            <Input label="Email" type="email" placeholder="joao@gmail.com"
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)}
            />
            <Input label="Senha" type="password" placeholder="*********"
                value={formData.password}
                onChangeText={value => handleInputChange('password', value)}
            />
            <ContainerButton>
                <Button labelButton="CADASTRAR" onPress={handleSignUp} width={290} height={47} radius={10} />
                <SubText>Já possui uma conta ? <Weight700 
                style={{color: "#22A36D"}} 
                onPress={() => navigation.navigate('login')}>Entre agora</Weight700></SubText>
            </ContainerButton>
        </Container>
    )
}