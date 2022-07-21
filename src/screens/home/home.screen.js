import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar } from 'react-native'
import { ExpertsCategories } from '~components/experts-categories'
import { Headline } from '~components/headline'

import { Container } from './styles'

export function HomeScreen() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Headline
          title="Agende sua consulta com rapidez e facilidade"
          description="Os melhores médicos estão aqui"
        />
        <ExpertsCategories />
      </Container>
    </>
  )
}

HomeScreen.propTypes = {
  props: PropTypes.object,
}
