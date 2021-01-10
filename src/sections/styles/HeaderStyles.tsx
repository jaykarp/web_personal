import styled, { css } from 'styled-components/macro'

export const Filler = styled.div`
    width: 100%;
    height: 4.2rem;
`

type ManagerProps = {
    isTop: boolean
}

export const WidthManager = styled.div<ManagerProps>`
    ${({
        theme: {
            colors: { background },
        },
        isTop,
    }) => css`
        background: ${background};
        box-shadow: ${isTop ? '' : '0px 2px 2px rgba(0, 0, 0, 0.1)'};
    `};
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 101;
    transition: all 0.5s;
`

export const HeaderContainer = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    padding: 0 2rem;
    height: 4.2rem;
`

export const LogoContainer = styled.div`
    display: flex;
`

export const ItemContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`
export const HeaderItem = styled.div`
    ${({ theme: { fonts } }) => css`
        font-family: ${fonts.body.family};
        font-size: ${fonts.medium};
        padding: 10px;
    `}
    cursor: pointer;
`
