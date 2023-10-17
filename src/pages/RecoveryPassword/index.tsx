import { Text, TouchableOpacity } from "react-native";
import { BackArrow, BackThePage, Container, ContainerButton, LoginText } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";

export default function RecoveryPassword() {
    const navigation = useNavigation<propsStack>();
    return(
        <Container>
            <BackThePage>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
                </TouchableOpacity>
                <LoginText>Recuperação de senha</LoginText>
                <Text>‎ ‎ ‎ ‎ ‎ </Text>
            </BackThePage>
            <Input label="Nova senha" type="password" placeholder="Insira sua nova senha" 
                // value={formData.email}
                // onChangeText={value => handleInputChange('email', value)} 
                required={true} />
            <Input label="Confirmar nova senha" type="password" placeholder="Insira sua nova senha novamente" 
                // value={formData.password}
                // onChangeText={value => handleInputChange('password', value)} 
                required={true} />
            <ContainerButton>
                <Button labelButton="ENTRAR" width={200} height={47} radius={10} 
                // onPress={handleLogin}
                 />
            </ContainerButton>
        </Container>
    )

}