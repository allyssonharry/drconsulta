import styled from 'styled-components/native'

import { theme } from '~styles/theme'

export const Container = styled.View`
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.white};
`

export const Description = styled.Text`
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: ${theme.colors.white};
`
