/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useState } from "react"
import darkTheme from "../styles/themes/darkTheme"

type TProps = {
    children: ReactNode
}

const initialValue = {
    theme: darkTheme,
    setTheme: () => { }
}

type Ttheme = {
    theme: {
        title: string;
        colors: {
            backgroundColor: string;
            primary: string;
            secondary: string;
            third: string;
            textColor: string;
        };
    },
    setTheme: (newState: {
        title: string;
        colors: {
            backgroundColor: string;
            primary: string;
            secondary: string;
            third: string;
            textColor: string;
        };
    },) => void
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