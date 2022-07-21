import React, { useContext } from 'react'
import { NavigationContext } from '@react-navigation/native'
import { Button } from '~components/button'

import { Container, IconSuccess, Heading, Lead, ButtonGroup } from './styles'

export function SchedulingSuccessScreen() {
  const navigation = useContext(NavigationContext)

  return (
    <Container>
      <IconSuccess />
      <Heading>Sua consulta foi agendada!</Heading>
      <Lead>Lembre de levar os documentos necessários.</Lead>
      <ButtonGroup>
        <Button
          label="OK"
          variant="light"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }
        />
      </ButtonGroup>
    </Container>
  )
}
