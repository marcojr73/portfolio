/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react"
import usePersistedState from "../hooks/usePersistedState"
import { TProps, Ttheme } from "../interfaces"
import lightTheme from "../styles/themes/lightTheme"

const initialValue = {
    theme: lightTheme,
    setTheme: () => { }
}

export const themeContext = createContext<Ttheme>(initialValue)

export const ThemeContextProvider = ({ children }: TProps) => {
    const [theme, setTheme] = usePersistedState("theme", lightTheme)
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}