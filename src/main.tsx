import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { LanguageContextProvider } from "./context/languageContext"
import { ThemeContextProvider } from "./context/themeContext"
import "./utils/translation/i18n"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
