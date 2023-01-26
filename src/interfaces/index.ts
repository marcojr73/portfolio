import { ReactNode } from "react"
import { IconType } from "react-icons"

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

type Tlanguage ={
    language: string;
    setLanguage: (newState: string) => void
}

type TProps = {
    children: ReactNode
}

type Tproject = {
    title: string;
    description: string;
    pictures: string[];
    technologies: IconType[];
    link: string;
}

export type {
    Ttheme,
    TProps,
    Tproject,
    Tlanguage
}