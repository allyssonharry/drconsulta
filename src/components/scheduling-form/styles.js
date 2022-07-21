import styled from 'styled-components/native'

import { theme } from '~styles/theme'

export const Container = styled.View``

export const FormSection = styled.View``

export const FormContent = styled.View``

export const FormSectionTitle = styled.Text`
  margin-bottom: 10px;
`

export const HStackSep = styled.Text`
  color: ${theme.colors.dark};
  font-size: 16px;
  font-weight: bold;
`

export const Picker = styled.TouchableOpacity``

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const PickerBadge = styled.Text`
  background-color: ${theme.colors.secondary};
  padding: 15px;
  width: 160px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: ${theme.colors.dark};
  border-radius: 8px;
`

export const InputGroup = styled.View`
  margin-bottom: 10px;
`
