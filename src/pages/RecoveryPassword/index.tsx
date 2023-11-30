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
            <LoginText>Recuperação de senha</LoginText>
            <Text>‎ ‎ ‎ ‎ ‎ </Text>
            <Input label="Nova senha" type="password" placeholder="Insira sua nova senha" 
                // value={formData.email}
                // onChangeText={value => handleInputChange('email', value)} 
                required={true} />
            <Input label="Confirmar nova senha" type="password" placeholder="Insira sua nova senha novamente" 
                // value={formData.password}
                // onChangeText={value => handleInputChange('password', value)} 
                required={true} />
            <ContainerButton>
                <Button labelButton="CONFIRMAR" onPress={() => navigation.navigate('Login')} width={290} height={47} radius={10} 
                 />
            </ContainerButton>
        </Container>
    )

}