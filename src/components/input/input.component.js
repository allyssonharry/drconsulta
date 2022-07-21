import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

import {
  ErrorMessage,
  TextInput,
  TextInputMasked,
  ReservedSpace,
} from './styles'

export function Input({
  name,
  label,
  placeholder,
  control,
  rules = {},
  mask,
  ...props
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          {mask ? (
            <TextInputMasked
              value={value}
              onChangeText={(masked, unmasked) => {
                onChange(masked)
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              mask={mask}
              {...props}
            />
          ) : (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              {...props}
            />
          )}
          {error ? (
            <ErrorMessage>{error.message}</ErrorMessage>
          ) : (
            <ReservedSpace />
          )}
        </>
      )}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.object.isRequired,
  rules: PropTypes.object,
  mask: PropTypes.any,
}
