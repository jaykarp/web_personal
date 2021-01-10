import React, { forwardRef } from 'react'
import hs from '../assets/headshot2.svg'
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
    return (
        <WidthManager>
            <ConnectContainer ref={ref}>
                <ConnectHeader> Connect </ConnectHeader>
                <ContentContainer>
                    <LinksContainer>
                        <LinkContainer href={'#'}>
                            <Arrow indent={'0rem'}>&#129106;&nbsp;</Arrow>
                            <Link color={'#456268'}>email.</Link>
                        </LinkContainer>
                        <LinkContainer href={'#'}>
                            <Arrow indent={'1.5rem'}>&#129106;&nbsp;</Arrow>
                            <Link color={'#FF8A00'}>linkedin.</Link>
                        </LinkContainer>
                        <LinkContainer href={'#'}>
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
