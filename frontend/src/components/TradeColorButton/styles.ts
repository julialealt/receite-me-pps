import styled from 'styled-components/native';

interface ScopeButtonProps {
    colorButton?: boolean
  }

export const ScopeButton = styled.TouchableOpacity<ScopeButtonProps>`
    flex: 1;
    display: flex;
    align-items: center;
    background: ${({ colorButton }: ScopeButtonProps) => (colorButton ? '#22A36D' : 'transparent')};
    padding: 10px 10px;
    border-radius: 12px;

`

export const TextButton = styled.Text<ScopeButtonProps>`
    fontFamily: 'Poppins-Bold';
    flex: 1;
    font-size: 15px;
    color: ${({ colorButton }: ScopeButtonProps) => (colorButton ? '#FFFFFF' : '#A9A9A9')};
`