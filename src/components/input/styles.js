import styled from 'styled-components/native'
import MaskInput from 'react-native-mask-input'

import { theme } from '~styles/theme'

export const TextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: theme.colors.black,
}))`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.black};
  border-radius: 10px;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  opacity: ${disabled => (disabled ? 0.6 : 1)};
`

export const TextInputMasked = styled(MaskInput).attrs(() => ({
  placeholderTextColor: theme.colors.black,
}))`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.black};
  border-radius: 10px;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  opacity: ${disabled => (disabled ? 0.6 : 1)};
`

export const ErrorMessage = styled.Text`
  color: ${theme.colors.danger};
  margin-bottom: 8px;
  margin-left: 5px;
  height: 20px;
`

export const ReservedSpace = styled.View`
  height: 20px;
  margin-bottom: 8px;
`
