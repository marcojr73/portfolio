import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            backgroundColor: string;
            primary: string;
            secondary: string;
            third: string;
            textColor: string;
        };
    }
}