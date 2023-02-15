/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react"
import usePersistedState from "../hooks/usePersistedState"
import { TProps, Ttheme } from "../interfaces"
import darkTheme from "../styles/themes/darkTheme"

const initialValue = {
    theme: darkTheme,
    setTheme: () => { }
}

export const themeContext = createContext<Ttheme>(initialValue)

export const ThemeContextProvider = ({ children }: TProps) => {
    const [theme, setTheme] = usePersistedState("theme", darkTheme)
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}