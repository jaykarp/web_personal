import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string, 
        boxShadow: string,
        fonts: {
            header: {
                family: string,
            },
            body: {
                family: string,
            },
            small: string,
            medium: string,
            large: string,
        }
        colors: {
            background: string,
            light: string,
            medium: string,
            dark: string,
            accent: string,
            black: string,
            white: string,
        },
        sizes: {
            small: string,
            medium: string,
        }
    }
}