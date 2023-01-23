import React from "react"
import { ThemeProvider } from "styled-components"
import Aside from "./components/aside"
import Content from "./pages/Content"

import GlobalStyle from "./styles/GlobalStyle"
import "./styles/reset.css"
import darkTheme from "./styles/themes/darkTheme"

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Aside/>
        <Content/>
    </ThemeProvider>
  )
}

export default App
