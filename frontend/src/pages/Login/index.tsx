import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerButton, LoginText } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

interface FormData {
    email: string;
    password: string;
}

interface UserFormData extends FormData {
    nome: string;
    id: number;
  }

export default function Login() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (name: keyof FormData, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
          }));
    }

    const handleLogin = async() => {
        const response = await axios.get("http://localhost:3000/users")
        const users = response.data;
        const account = formData;
        const findUserInAccount = !!users.find((item: UserFormData) => item.email === account.email && item.password === account.password);
        if(findUserInAccount) navigation.navigate('mainViewer');
    };

    return(
        <Container>
            <LoginText>Login</LoginText>
            <Input label="Email" type="email" placeholder="joao@gmail.com" 
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)} />
            <Input label="Senha" type="password" placeholder="*********" 
                value={formData.password}
                onChangeText={value => handleInputChange('password', value)} />
            <ContainerButton>
                <Button labelButton="ENTRAR" width={290} height={47} radius={10} onPress={handleLogin} />
            </ContainerButton>
        </Container>
    )
}