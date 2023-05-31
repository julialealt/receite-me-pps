import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerButton, LoginText, SubText } from "./styles";

export default function Login() {
    return(
        <Container>
            <LoginText>Login</LoginText>
            <Input label="Email" placeholder="joao@gmail.com"/>
            <Input label="Senha" placeholder="*********"/>
            <ContainerButton>
                <Button labelButton="ENTRAR" width={290} height={47} radius={10} />
                <SubText>Esqueci minha senha</SubText>
            </ContainerButton>
        </Container>
    )
}