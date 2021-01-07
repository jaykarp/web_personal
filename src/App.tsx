import React from 'react'
import Header from './sections/Header'
import Intro from './sections/Intro'
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

interface Props {}

const App = (props: Props) => {
    return (
        <>
            <Header/>
            <Intro/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App