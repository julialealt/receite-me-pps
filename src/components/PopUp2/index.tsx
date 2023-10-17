import { Button, Overlay } from '@rneui/themed';
import { Text, View } from 'react-native';
import { ButtonContainer, InputContainer, TextPopUp, TitlePopUp } from './styles';
import Input from '../Input';

interface PopUpProps {
    title: String,
    text: String,
    placeholder?: string | undefined,
    isVisible: boolean,
    onPressBackDrop?: () => void
    handleDeleteUser?: () => void
}

export default function PopUp2({isVisible, onPressBackDrop, handleDeleteUser, text, placeholder, title}: PopUpProps) {
    return(
        <View>
            <Overlay 
                    isVisible={isVisible}
                    onBackdropPress={onPressBackDrop}
                    overlayStyle={{backgroundColor: "#FFFFFF", width: 341, height: 310, borderRadius: 20}}>
                    <TitlePopUp>{title}</TitlePopUp>
                    <TextPopUp>{text}</TextPopUp>
                    <InputContainer>
                        <Input type={"email"} placeholder={placeholder}/>
                    </InputContainer>
                    <ButtonContainer>
                        <Button 
                        title="Cancelar" 
                        buttonStyle={{ backgroundColor: 'transparent', borderRadius: 10 }}
                        titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#da2d2d' }}
                        containerStyle={{
                            height: 40,
                            width: 110
                        }}
                        onPress={onPressBackDrop}
                        />
                        <Button 
                        title="Enviar" 
                        buttonStyle={{
                            backgroundColor: '#22A36D', borderRadius: 5
                        }}
                        titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#FFFFFF' }}
                        containerStyle={{
                            height: 40,
                            width: 110
                        }}
                        onPress={handleDeleteUser}
                        />
                    </ButtonContainer>
            </Overlay>
        </View>
    
        )
    }