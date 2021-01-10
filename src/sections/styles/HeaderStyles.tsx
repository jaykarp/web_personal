import styled from 'styled-components/macro'

export const WidthManager = styled.div`
    background: ${({
        theme: {
            colors: { background },
        },
    }) => background};
    width: 100%;
    display: flex;
    justify-content: center;
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
    ${({ theme: { fonts } }) => `
        font-family: ${fonts.body.family};
        font-size: ${fonts.medium};
        padding: 10px;
        `}
`
