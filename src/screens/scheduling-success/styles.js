import styled from 'styled-components/native'

import { theme } from '~styles/theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 18px;
  background-color: ${theme.colors.success};
`

export const IconSuccess = styled.Image.attrs(() => ({
  source: require('~assets/images/success.png'),
}))`
  width: 68px;
  height: 68px;
  margin: 0 auto;
`

export const Heading = styled.Text`
  text-align: center;
  color: ${theme.colors.light};
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const Lead = styled.Text`
  text-align: center;
  color: ${theme.colors.light};
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 50px;
`

export const ButtonGroup = styled.View`
  margin: 0 80px;
`

export const ScrollView = styled.ScrollView``
