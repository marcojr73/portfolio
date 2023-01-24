import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import Aside from "./components/aside"
import Content from "./pages/Content"

import GlobalStyle from "./styles/GlobalStyle"
import darkTheme from "./styles/themes/darkTheme"

import "./styles/reset.css"
import { themeContext } from "./context/themeContext"

function App() {

  const {theme} = useContext(themeContext)

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Aside/>
        <Content/>
    </ThemeProvider>
  )
}

export default App
