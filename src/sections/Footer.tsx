import React from 'react'
import {
    FooterContainer,
    FooterText,
    FooterTextSmall,
} from './styles/FooterStyles.'

interface Props {}

const Footer = (props: Props) => {
    return (
        <FooterContainer>
            <FooterText> Copyright &copy; Jay Karp 2021 </FooterText>
            <FooterTextSmall>designed and built by me.</FooterTextSmall>
        </FooterContainer>
    )
}

export default Footer
