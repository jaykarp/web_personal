import React from 'react'
import { Container } from '../styles/AppStyles'
import {
    HeaderContainer,
    LogoContainer,
    ItemContainer,
    HeaderItem,
} from './styles/HeaderStyles'

interface Props {
    refs: {
        skillsRef: React.RefObject<HTMLDivElement>
        experienceRef: React.RefObject<HTMLDivElement>
        projectsRef: React.RefObject<HTMLDivElement>
        connectRef: React.RefObject<HTMLDivElement>
    }
}

const Header = ({ refs }: Props) => {
    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current == null) {
            return
        }
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <HeaderItem>jay karp</HeaderItem>
            </LogoContainer>
            <ItemContainer>
                <HeaderItem onClick={() => scrollTo(refs.skillsRef)}>
                    {' '}
                    skills{' '}
                </HeaderItem>
                <HeaderItem onClick={() => scrollTo(refs.experienceRef)}>
                    {' '}
                    experience{' '}
                </HeaderItem>
                <HeaderItem onClick={() => scrollTo(refs.projectsRef)}>
                    {' '}
                    projects{' '}
                </HeaderItem>
                <HeaderItem onClick={() => scrollTo(refs.connectRef)}>
                    {' '}
                    connect{' '}
                </HeaderItem>
            </ItemContainer>
        </HeaderContainer>
    )
}

export default Header
