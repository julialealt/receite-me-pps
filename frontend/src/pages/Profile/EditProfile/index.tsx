import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import Input from "../../../components/Input";
import { BackArrow, BackThePage, Container, ContainerEditProfileInputs, EditProfileText } from "./styles";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function EditProfile() {
    const navigation = useNavigation()

    return(
        <ScrollView>
            <Container>
                <BackThePage>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <BackArrow source={require("../../../assets/geral/arrowLeft.png")} />
                    </TouchableOpacity>
                    <EditProfileText>Editar Perfil</EditProfileText>
                    <Text>‎ ‎ ‎ ‎ </Text>
                </BackThePage>
                <ContainerEditProfileInputs>
                    <Input label="Nome" placeholder="Rossana Andrade" />
                    <Input label="Bio" placeholder="Alguma bio ou status" />
                    <Input label="Email" placeholder="rossanaandrade@gmail.com" />
                    <Input label="Senha tual" />
                    <Input label="Nova senha" />
                    <Input label="confirme nova senha" />
                </ContainerEditProfileInputs>
                <Button labelButton="Salvar alterações" width={290} height={47} radius={12} />
            </Container>
        </ScrollView>
    )
}