import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import Aside from "./components/aside"
import Content from "./pages/Content"
import GlobalStyle from "./styles/GlobalStyle"
import "./styles/reset.css"
import { themeContext } from "./context/themeContext"
import Toastify from "./utils/toatify"

function App() {
  const {theme} = useContext(themeContext)

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toastify/>
        <Aside/>
        <Content/>
    </ThemeProvider>
  )
}

export default App
