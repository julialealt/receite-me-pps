import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerButton, LoginText, SubText } from "./styles";

export default function SignUp() {
    return(
        <Container>
            <LoginText>Sign up</LoginText>
            <Input label="Nome" placeholder="João" />
            <Input label="Email" placeholder="joao@gmail.com"/>
            <Input label="Senha" placeholder="*********"/>
            <ContainerButton>
                <Button labelButton="CADASTRAR" onPress={() => console.log("Alou")} width={290} height={47} radius={10} />
                <SubText>Já possui uma conta ? <Weight700 style={{color: "green"}}>Entre agora</Weight700></SubText>
            </ContainerButton>
        </Container>
    )
}