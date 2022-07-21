import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Description } from './styles'

export function Headline({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
