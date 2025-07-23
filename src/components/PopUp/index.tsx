import { Overlay } from '@rneui/themed';
import { View } from 'react-native';
import { ButtonContainer, TextPopUp } from './styles';
import React from 'react';
import { ButtonFactory } from '../../factories/ButtonFactory';

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
          <ButtonFactory
            type="secondary"
            label="Cancelar"
            size='small'
            onPress={onPressBackDrop}
          />
          <ButtonFactory
            type="danger"
            label="Excluir"
            size='small'
            onPress={() => handleDeleteUser(id)}
          />
        </ButtonContainer>
      </Overlay>
    </View>

  )
}