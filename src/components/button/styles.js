import styled from 'styled-components/native'

import { theme } from '~styles/theme'

export const Text = styled.Text`
  justify-content: center;
  padding: ${({ size }) => (size === 'large' ? '25px 18px' : '18px')};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 50px;
  background-color: ${({ variant }) =>
    variant === 'success' ? theme.colors.success : theme.colors.light};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  color: ${({ variant }) =>
    variant === 'success' ? theme.colors.light : theme.colors.dark};
`
