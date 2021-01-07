import React from 'react'
import {
    IntroContainer,
    IntroImgContainer,
    IntroImg,
    IntroTextContainer,
    IntroText,
    IntroTextAccent,
} from './styles/IntroStyles'
import cartoon from '../assets/cartoon_jay.png'

interface Props {}

const Intro = (props: Props) => {
    return (
        <IntroContainer>
            <IntroTextContainer>
                <IntroText>Hi, I'm</IntroText>
                <IntroTextAccent>&nbsp;Jay</IntroTextAccent>
            </IntroTextContainer>
            <IntroImgContainer>
                <IntroImg src={cartoon} />
            </IntroImgContainer>
        </IntroContainer>
    )
}

export default Intro
