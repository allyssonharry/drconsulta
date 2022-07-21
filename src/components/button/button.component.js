import React from 'react'
import PropTypes from 'prop-types'
import { Pressable } from 'react-native'

import { Text } from './styles'

export function Button({
  onPress,
  label,
  size,
  variant = 'success',
  disabled,
}) {
  return (
    <PressableScale onPress={onPress} disabled={disabled}>
      <Text variant={variant} size={size} disabled={disabled}>
        {label}
      </Text>
    </PressableScale>
  )
}

function PressableScale({ scale, style, children, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        {
          transform: [{ scale: pressed ? scale ?? 0.99 : 1 }],
          opacity: pressed ? 0.9 : 1,
        },
      ]}
      {...props}>
      {children}
    </Pressable>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
}
