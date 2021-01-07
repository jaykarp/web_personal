import React, { useRef } from 'react'
import { DefaultTheme, ThemeProvider } from "styled-components"
import smoothscroll from 'smoothscroll-polyfill'

import Header from './sections/Header'
import Intro from './sections/Intro'
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from './sections/Projects'
import Connect from './sections/Connect'
import Footer from './sections/Footer'

import { Container } from "./styles/AppStyles"

smoothscroll.polyfill()

const theme: DefaultTheme = {
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fonts: {
        header: {
            family: 'Work Sans, sans-serif'
        },
        body: {
            family: 'Noto Sans, sans-serif',
        },
        small: '1.2rem',
        medium: '2rem',
        large: '3rem',
    },
    colors: {
        background: '#FFFAEE',
        light: '#D0E8F2',
        medium: '#79A3B1',
        dark: '#456268',
        accent: '#FF8A00',
        black: '#000000',
        white: '#FFFFFF',
    },
    sizes: {
        small: '500px',
        medium: '768px',
    }
}

const App = () => {
    const skillsRef     = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const projectsRef   = useRef<HTMLDivElement>(null)
    const connectRef    = useRef<HTMLDivElement>(null)
    return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Header refs={{
                        skillsRef,
                        experienceRef, 
                        projectsRef, 
                        connectRef}}/>
                    <Intro/>
                    <About/>
                    <Skills ref={skillsRef}/>
                    <Experience ref={experienceRef}/>
                    <Projects ref={projectsRef}/>
                    <Connect ref={connectRef}/>
                    <Footer/>
                </Container>
            </ThemeProvider>
    )
}

export default App