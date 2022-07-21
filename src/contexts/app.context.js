import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'

const contextValue = {
  platform: Platform,
}

const AppContext = createContext(contextValue)

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
