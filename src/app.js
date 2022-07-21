import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Routers } from '~routes'
import { AppProvider } from '~contexts/app.context'
import { theme } from '~styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routers />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
