import React, { useContext } from 'react'
import { NavigationContext } from '@react-navigation/native'
import { Button } from '~components/button'
import categories from '~assets/data/experts-categories.asset'

import { Category, List, ButtonGroup } from './styles'

export function ExpertsCategories() {
  const navigation = useContext(NavigationContext)

  return (
    <Category>
      <List>
        {categories.map((category, i) => (
          <ButtonGroup key={i}>
            <Button
              variant="light"
              size="large"
              label={category.title}
              onPress={() =>
                navigation.navigate('Scheduling', { title: category.title })
              }
            />
          </ButtonGroup>
        ))}
      </List>
    </Category>
  )
}
