import React from 'react'
import PropTypes from 'prop-types'
import { SchedulingForm } from '../../components/scheduling-form'

import { Container, Scrolled, Headline, Heading, SubHeading } from './styles'

export function SchedulingScreen({ route }) {
  const { title } = route.params

  return (
    <Container>
      <Scrolled showsVerticalScrollIndicator={false}>
        <Headline>
          <Heading>Especialidade</Heading>
          <SubHeading>{title}</SubHeading>
        </Headline>
        <SchedulingForm catName={title} />
      </Scrolled>
    </Container>
  )
}

SchedulingScreen.propTypes = {
  route: PropTypes.object.isRequired,
}
