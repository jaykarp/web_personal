import React from 'react'
import { DefaultTheme, ThemeProvider } from "styled-components"

import Header from './sections/Header'
import Intro from './sections/Intro'
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const theme: DefaultTheme = {
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    colors: {
        background: '#FFFAEE',
        light: '#D0E8F2',
        medium: '#79A3B1',
        dark: '#456268',
        accent: '#FF8A00',
        black: '#000000',
        white: '#FFFFFF',
    }
}

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header/>
                <Intro/>
                <About/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Contact/>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}

export default App