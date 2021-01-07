import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string, 
        boxShadow: string,
        colors: {
            background: string,
            light: string,
            medium: string,
            dark: string,
            accent: string,
            black: string,
            white: string,
        }
    }
}