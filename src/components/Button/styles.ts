import styled from 'styled-components/native';

interface ScopeButtonProps {
    width?: number,
    height?: number,
    radius?: number,
    disabled?: boolean,
  }

export const ScopeButton = styled.TouchableOpacity<ScopeButtonProps>`
    width: ${({ width }: ScopeButtonProps) => (width ? `${width}px` : 'auto')};
    height: ${({ height }: ScopeButtonProps) => (height ? `${height}px` : 'auto')};
    background: ${({disabled}: ScopeButtonProps) => (disabled ? "#A9A9A9" : "#22A36D")};
    border-radius: ${({ radius }: ScopeButtonProps) => (radius ? `${radius}px` : '0px')};;
    align-items: center;
    justify-content: center;
`

export const TextButton = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 16px;
    color: #ffffff;
`