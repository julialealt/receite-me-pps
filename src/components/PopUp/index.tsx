import { Button, Overlay } from '@rneui/themed';
import { View } from 'react-native';
import { ButtonContainer, TextPopUp } from './styles';
import React from 'react';

interface PopUpProps {
  text: String,
  isVisible: boolean,
  onPressBackDrop: () => void
  handleDeleteUser: (id: Number) => void
  id: Number
}

export default function PopUp({ isVisible, onPressBackDrop, handleDeleteUser, text, id }: PopUpProps) {
  return (
    <View>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={onPressBackDrop}
        overlayStyle={{ backgroundColor: "#FFFFFF", width: 301, height: 178, borderRadius: 20 }}>
        <TextPopUp>{text}</TextPopUp>
        <ButtonContainer>
          <Button
            title="Cancelar"
            buttonStyle={{ backgroundColor: '#A9A9A9', borderRadius: 5 }}
            titleStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFFFFF' }}
            containerStyle={{
              height: 40,
              width: 110
            }}
            onPress={onPressBackDrop}
          />
          <Button
            title="Excluir"
            buttonStyle={{
              backgroundColor: '#da2d2d',
              borderRadius: 5
            }}
            titleStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFFFFF' }}
            containerStyle={{
              height: 40,
              width: 110
            }}
            onPress={() => handleDeleteUser(id)}
          />
        </ButtonContainer>
      </Overlay>
    </View>

  )
}