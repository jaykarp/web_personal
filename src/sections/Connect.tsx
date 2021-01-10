import React, { forwardRef, useEffect } from 'react'
import hs from '../assets/headshot2.svg'
import Shape from '../components/Shape'
import {
    ConnectContainer,
    ConnectHeader,
    ContentContainer,
    HeadshotContainer,
    Headshot,
    Arrow,
    Link,
    LinksContainer,
    LinkContainer,
} from './styles/ConnectStyles'
import { WidthManager } from './styles/ConnectStyles'

interface Props {}

const Connect = forwardRef<HTMLDivElement>((props: Props, ref) => {
    const email = `amxrMjIyNUBjb2x1bWJpYS5lZHU=`

    useEffect(() => {
        const links = document.querySelectorAll<HTMLElement>(
            `[data-gen='email']`
        )
        links.forEach((l) => {
            l.onmouseover = l.ontouchstart = () =>
                l.setAttribute('href', `mailto:${atob(email)}`)
        })
        return () => {
            links.forEach((l) => {
                l.onmouseover = l.ontouchstart = () => null
            })
        }
    }, [])
    return (
        <WidthManager>
            <ConnectContainer ref={ref}>
                <Shape
                    shape={'hexagon'}
                    size={'6rem'}
                    rotation={'20deg'}
                    top={'80%'}
                    left={'-30%'}
                />
                <ConnectHeader> Connect </ConnectHeader>
                <ContentContainer>
                    <LinksContainer>
                        <LinkContainer href={''} data-gen={'email'}>
                            <Arrow indent={'0rem'}>&#129106;&nbsp;</Arrow>
                            <Link color={'#456268'}>email.</Link>
                        </LinkContainer>
                        <LinkContainer
                            href={'https://www.linkedin.com/in/jaykarp/'}
                            target={'_black'}
                            rel={'noreferrer noopener'}
                        >
                            <Arrow indent={'1.5rem'}>&#129106;&nbsp;</Arrow>
                            <Link color={'#FF8A00'}>linkedin.</Link>
                        </LinkContainer>
                        <LinkContainer
                            href={'https://www.github.com/jaykarp'}
                            target={'_black'}
                            rel={'noreferrer noopener'}
                        >
                            <Arrow indent={'3rem'}>&#129106;&nbsp;</Arrow>
                            <Link color={'#D0E8F2'}>github.</Link>
                        </LinkContainer>
                        <LinkContainer href={'#'}>
                            <Arrow indent={'4.5rem'}>&#129106;&nbsp;</Arrow>
                            <Link color={'#79A3B1'}>resume.</Link>
                        </LinkContainer>
                    </LinksContainer>
                    <HeadshotContainer>
                        <Headshot src={hs}></Headshot>
                    </HeadshotContainer>
                </ContentContainer>
            </ConnectContainer>
        </WidthManager>
    )
})

export default Connect
