import styled from 'styled-components'

// TODO:
// Add media query and hamburger header for theme.sizes.small

export const HeaderContainer = styled.div`
    display: flex;
    max-width: 1440px;
    padding 0 1rem;
    background: ${({
        theme: {
            colors: { background },
        },
    }) => background};
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
