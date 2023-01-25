/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react"
import { TProps, Ttheme } from "../interfaces"
import darkTheme from "../styles/themes/darkTheme"
import lightTheme from "../styles/themes/lightTheme"

const initialValue = {
    theme: lightTheme,
    setTheme: () => { }
}

export const themeContext = createContext<Ttheme>(initialValue)

export const ThemeContextProvider = ({ children }: TProps) => {
    const [theme, setTheme] = useState(initialValue.theme)
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}