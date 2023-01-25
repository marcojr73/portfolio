/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react"
import usePersistedState from "../hooks/usePersistedState"
import { Tlanguage, TProps } from "../interfaces"

const initialValue = {
    language: "en",
    setLanguage: () => { }
}

export const languageContext = createContext<Tlanguage>(initialValue)

export const LanguageContextProvider = ({ children }: TProps) => {
    const [language, setLanguage] = usePersistedState("language", "en")
    return (
        <languageContext.Provider value={{ language, setLanguage }}>
            {children}
        </languageContext.Provider>
    )
}