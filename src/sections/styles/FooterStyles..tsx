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

export const FooterContainer = styled.div`
    ${({
        theme: {
            colors: { dark, white },
            fonts: {
                xsmall,
                body: { family },
            },
        },
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
        background: ${dark};
        color: ${white};
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100%;
`

export const FooterText = styled.div``
export const FooterTextSmall = styled.div`
    font-size: 0.8rem;
`
