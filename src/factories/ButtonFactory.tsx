import React from 'react';
import { GestureResponderEvent } from 'react-native';
import Button from '../components/Button';

type ButtonType = 'primary' | 'danger' | 'ghost' | 'secondary';

interface ButtonFactoryProps {
  type: ButtonType;
  label: string;
  size?: 'large' | 'medium' | 'small';
  width?: number;
  height?: number;
  rounded?: boolean;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export const ButtonFactory = ({
  type,
  label,
  size = 'large',
  width: customWidth,
  height: customHeight,
  rounded = false,
  disabled,
  onPress,
}: ButtonFactoryProps) => {

  let buttonWidth: number;
  let buttonHeight: number;

  switch (size) {
    case 'small':
      buttonWidth = 110;
      buttonHeight = 40;
      break;
    case 'medium':
      buttonWidth = 200;
      buttonHeight = 47;
      break;
    case 'large':
    default:
      buttonWidth = 290;
      buttonHeight = 47;
      break;
  }

  const radius = rounded ? 50 : 10;

  const baseButtonProps = {
    labelButton: label,
    onPress: onPress,
    disabled: disabled,
    width: customWidth || buttonWidth,
    height: customHeight || buttonHeight,
    radius: radius,
  };

  switch (type) {
    case 'danger':
      return (
        <Button {...baseButtonProps} bgColor="#DA2D2D" />
      );

    case 'ghost':
      return (
        <Button {...baseButtonProps} bgColor="transparent" color="#22A36D" />
      );

    case 'secondary':
      return (
        <Button {...baseButtonProps} bgColor="#A9A9A9" />
      );

    case 'primary':
    default:
      return (
        <Button {...baseButtonProps} />
      );
  }
};