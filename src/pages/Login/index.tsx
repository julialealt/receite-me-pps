import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { BackArrow, BackThePage, Container, ContainerButton, EsqueciSenha, LoginText } from "./styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth"
import { propsStack } from '../../routes/Models';
import { Text, TouchableOpacity } from "react-native";
import PopUp2 from "../../components/PopUp2";

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const navigation = useNavigation<propsStack>();
    const { signIn } = useContext(AuthContext)
    const [isVisible, setIsVisible] = useState(false);
    const [sendCodeOverlay, setSendCodeOverlay] = useState(false);
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

    const tradeOverlay = () => {
        setIsVisible(false)
        setSendCodeOverlay(true)
    }

    const handleNavigateRecoveryPassword = async() => {
        navigation.navigate("RecoveryPassword");
    };



    return(
        <Container>
            <PopUp2 
               title={"Recuperação de senha"} text={"Informe o email cadastrado na sua conta e enviaremos um código para você redefinir sua senha."} isVisible={isVisible}
               onPressBackDrop={() => setIsVisible(false)} handleDeleteUser={tradeOverlay} placeholder="Insira seu email"
             />
             <PopUp2 
               title={"Código enviado"} text={"Digite abaixo o código que enviamos para seu email para recuperar o acesso à sua conta."} isVisible={sendCodeOverlay}
               onPressBackDrop={() => setSendCodeOverlay(false)} handleDeleteUser={handleNavigateRecoveryPassword} placeholder="Insira seu código"
             />
            <BackThePage>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
                </TouchableOpacity>
                <LoginText>Login</LoginText>
                <Text>‎ ‎ ‎ ‎ ‎ </Text>
            </BackThePage>
            <Input label="Email" type="email" placeholder="joao@gmail.com" 
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)} 
                required={true} />
            <Input label="Senha" type="password" placeholder="*********" 
                value={formData.password}
                onChangeText={value => handleInputChange('password', value)} 
                required={true} />
            <ContainerButton>
                <Button labelButton="ENTRAR" width={200} height={47} radius={10} onPress={handleLogin} />
            </ContainerButton>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <EsqueciSenha>Esqueci Minha Senha</EsqueciSenha>
            </TouchableOpacity>
        </Container>
    )
}