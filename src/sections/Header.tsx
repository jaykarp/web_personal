import React, { useEffect, useState } from 'react'
import {
    HeaderContainer,
    LogoContainer,
    ItemContainer,
    HeaderItem,
    WidthManager,
    Filler,
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
    const [isTop, setIsTop] = useState(true)

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 1) {
                setIsTop(true)
            } else if (isTop) {
                setIsTop(false)
            }
        }
        return () => {
            window.onscroll = null
        }
    }, [isTop])

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current == null) {
            return
        }
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Filler />
            <WidthManager isTop={isTop}>
                <HeaderContainer>
                    <LogoContainer>
                        <HeaderItem>jay karp</HeaderItem>
                    </LogoContainer>
                    <ItemContainer>
                        <HeaderItem onClick={() => scrollTo(refs.skillsRef)}>
                            skills
                        </HeaderItem>
                        <HeaderItem
                            onClick={() => scrollTo(refs.experienceRef)}
                        >
                            experience
                        </HeaderItem>
                        <HeaderItem onClick={() => scrollTo(refs.projectsRef)}>
                            projects
                        </HeaderItem>
                        <HeaderItem onClick={() => scrollTo(refs.connectRef)}>
                            connect
                        </HeaderItem>
                    </ItemContainer>
                </HeaderContainer>
            </WidthManager>
        </>
    )
}

export default Header
