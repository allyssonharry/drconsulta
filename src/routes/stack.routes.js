import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { Greeting } from '~utils/gretting.util'
import { screenOptions } from '~config/stack.screen-options.config'

import { HomeScreen } from '~screens/home'
import { SchedulingScreen } from '~screens/scheduling'
import { SchedulingSuccessScreen } from '~screens/scheduling-success'

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  // const greeting = Greeting()

  return (
    <Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
        }}
      />
      <Screen
        name="Scheduling"
        component={SchedulingScreen}
        options={{
          title: '',
        }}
      />
      <Screen
        name="SchedulingSuccess"
        component={SchedulingSuccessScreen}
        options={{
          title: '',
        }}
      />
    </Navigator>
  )
}
