import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { StackRoutes } from './stack.routes'

export function Routers() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
