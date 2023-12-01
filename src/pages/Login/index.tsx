import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { BackArrow, BackThePage, ButtonContainer, Container, ContainerButton, EsqueciSenha, InputContainer, LoginText, TextPopUp, TitlePopUp } from "./styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth"
import { propsStack } from '../../routes/Models';
import { Text, TouchableOpacity } from "react-native";
import PopUp2 from "../../components/PopUp2";
import { View } from "react-native";
import { Button as BTOverlay, Overlay } from "@rneui/base";
import { apiURL } from "../../../api";

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
            await axios.get(`${apiURL}/usuarios/request_reset/${email}`);
            setIsVisible(false)
            navigation.navigate("RecoveryPassword", {email: email});

        } catch(error) {
            console.error("Error de requisição: ", error);
            throw error;
        }
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

    useEffect(() => {
        console.log(resetPasswordEmail)
    }, [resetPasswordEmail])



    return(
        <Container>
            <View>
                <Overlay 
                        isVisible={isVisible}
                        overlayStyle={{backgroundColor: "#FFFFFF", width: 341, height: 310, borderRadius: 20}}>
                        <TitlePopUp>Recuperação de senha</TitlePopUp>
                        <TextPopUp>Informe o email cadastrado na sua conta e enviaremos um código para você redefinir sua senha.</TextPopUp>
                        <InputContainer>
                            <Input type={"email"} placeholder={"Insira seu email"} value={resetPasswordEmail} onChangeText={(value: string) => setResetPasswordEmail(value)} />
                        </InputContainer>
                        <ButtonContainer>
                            <BTOverlay 
                            title="Cancelar" 
                            buttonStyle={{ backgroundColor: 'transparent', borderRadius: 10 }}
                            titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#da2d2d' }}
                            containerStyle={{
                                height: 40,
                                width: 110
                            }}
                            onPress={() => setIsVisible(false)}
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
                            onPress={() => sendEmailToResetPassword(resetPasswordEmail)}
                            />
                        </ButtonContainer>
                </Overlay>
            </View>

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