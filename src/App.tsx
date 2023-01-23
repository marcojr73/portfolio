import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/GlobalStyle"
import "./styles/reset.css"
import darkTheme from "./styles/themes/darkTheme"

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
