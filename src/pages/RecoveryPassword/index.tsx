import { Text, TouchableOpacity } from "react-native";
import { BackArrow, BackThePage, Container, ContainerButton, LoginText } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../../api";

interface EmailProps {
    email: string;
}

interface FormData {
    email: string;
    codigo: string;
    novaSenha: string;
    confirmarSenha: string;
}

export default function RecoveryPassword() {
    const navigation = useNavigation<propsStack>();
    const route = useRoute();
    const { email } = route.params as EmailProps
    const [formData, setFormData] = useState({
        email: email,
        codigo: '',
        novaSenha: '',
        confirmarSenha: ''
    })
    const [error, setError] = useState("");
    const [comparePassword, setComparePassword] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);


    const handleInputChange = (name: keyof FormData, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
          }));
    }

    const sendCodeToResetPassword = async () => {
        try {
            await axios.post(`${apiURL}/usuarios/reset`, {
                email: formData.email,
                codigo: formData.codigo,
                novaSenha: formData.novaSenha
                
            })

            navigation.goBack();
        } catch(error) {
            console.error("Error de requisição: ", error);
            throw error;
        }
    }

    const checkButtonEnabled = () => {
        const { codigo, novaSenha, confirmarSenha } = formData;
        const isAllFields = confirmarSenha.length > 0 && codigo.length == 6 && novaSenha.length > 0 && confirmarSenha == novaSenha && novaSenha.length >= 8

        setIsButtonEnabled(isAllFields);
      }
  
    useEffect(() => {
      checkButtonEnabled()
    },[formData])

    useEffect(() => {
        console.log(formData);
        console.log(comparePassword)
      },[formData, comparePassword])

    return(
        <Container>
            <BackThePage>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
                </TouchableOpacity>
                <LoginText>Recuperação de senha</LoginText>
                <Text>‎ ‎ ‎ ‎ ‎ </Text>
            </BackThePage>
            <Input label="Código" required={true} type={"text"} placeholder={"Insira seu código"} value={formData.codigo} onChangeText={value => {
                handleInputChange('codigo', value);
              }} />

            <Input label="Nova senha" required={true} type="password" placeholder={"Insira sua nova senha"} value={formData.novaSenha} onChangeText={value => {
                handleInputChange('novaSenha', value);
              }} />
 
            <Input label="Confirmar nova senha" required={true} type="password" placeholder={"Insira sua nova senha novamente" } value={formData.confirmarSenha} onChangeText={value => {
                handleInputChange('confirmarSenha', value);
            }} />

            <ContainerButton>
                <Button labelButton="CONFIRMAR" width={200} height={47} radius={10} onPress={sendCodeToResetPassword} disabled={!isButtonEnabled} />
            </ContainerButton>
        </Container>
    )

}