import styled from 'styled-components/macro'

export const ExperienceContainer = styled.div`
    ${({
        theme: {
            colors: { background },
        },
    }) => `
        background: ${background};
    `}
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
`

export const ExperienceHeader = styled.div`
    ${({
        theme: {
            fonts: {
                header: { family },
                large,
            },
        },
    }) => `
        font-family: ${family};
        font-size: ${large};
    `}
    margin-left: 5rem;
`
