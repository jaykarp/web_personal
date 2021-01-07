import React from 'react'
import {
    AboutContainer,
    CloudContainer,
    TextContainer,
    AboutText,
    CloudImg,
} from './styles/AboutStyles'
import cloud from '../assets/wordcloud.png'

interface Props {}

const About = (props: Props) => {
    return (
        <AboutContainer>
            <CloudContainer>
                <CloudImg src={cloud} />
            </CloudContainer>
            <TextContainer>
                <AboutText>
                    I’m a computer scientist, who loves Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Duis non venenatis justo.
                    Proin tellus tortor, venenatis in ipsum vestibulum, posuere
                    ultricies risus. Pellentesque lobortis, leo non viverra
                    vestibulum, metus velit pulvinar sapien, non suscipit massa
                    odio quis nisl. Curabitur vulputate tellus vitae tortor
                    vestibulum, et accumsan leo laoreet. Nam id est sit amet
                    nunc rutrum convallis.
                </AboutText>
            </TextContainer>
        </AboutContainer>
    )
}

export default About
