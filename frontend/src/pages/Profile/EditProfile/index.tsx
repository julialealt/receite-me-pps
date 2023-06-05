import { ScrollView } from "react-native";
import Input from "../../../components/Input";
import { Container, ContainerEditProfileInputs, EditProfileText } from "./styles";
import Button from "../../../components/Button";

export default function EditProfile() {
    return(
        <ScrollView>
            <Container>
                <EditProfileText>Editar Perfil</EditProfileText>
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