import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

import { theme } from '~styles/theme'

export const ModalContainer = styled.View``

export const ModalDialog = styled.View`
  background-color: ${theme.colors.white};
  padding: 22px;
  margin: 200px 10px;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  border-color: rgba(0, 0, 0, 0.1);
`

export const ModalClose = styled(Icon).attrs(() => ({
  name: 'close-outline',
  size: 38,
  color: `${theme.colors.dark}`,
}))`
  margin-left: auto;
  margin-bottom: 10px;
`

export const IconDanger = styled(Icon).attrs(() => ({
  name: 'ios-close-circle',
  size: 38,
  color: `${theme.colors.danger}`,
}))`
  margin: 0 auto;
`

export const IconSuccess = styled(Icon).attrs(() => ({
  name: 'ios-checkmark-circle',
  size: 38,
  color: `${theme.colors.success}`,
}))`
  margin: 0 auto;
`

export const IconInfo = styled(Icon).attrs(() => ({
  name: 'ios-information-circle',
  size: 38,
  color: `${theme.colors.info}`,
}))`
  margin: 0 auto;
`

export const ModalHeader = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.dark};
  margin-bottom: 10px;
`

export const ModalContent = styled.Text`
  font-size: 14px;
  color: ${theme.colors.dark};
  margin-bottom: 20px;
  text-align: center;
`
