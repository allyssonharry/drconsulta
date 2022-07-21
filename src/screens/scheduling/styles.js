import styled from 'styled-components/native'

import { theme } from '../../styles/theme'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 18px;
  background-color: ${theme.colors.white};
`

export const Headline = styled.View`
  margin: 30px 0;
  padding: 0 18px;
`

export const Heading = styled.Text`
  font-weight: normal;
  margin-bottom: 0;
  color: ${theme.colors.dark};
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
`

export const SubHeading = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${theme.colors.dark};
`

export const Scrolled = styled.ScrollView``
