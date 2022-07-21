import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'

const DEFAULT_STATE = {
  platform: Platform,
}

const AppContext = createContext(DEFAULT_STATE)

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={DEFAULT_STATE}>{children}</AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
