import styled from 'styled-components/macro'
import { Collapse as _Collapse } from 'react-collapse'

export const CollapseContainer = styled.div`
    ${({
        theme: {
            colors: { light, background },
            boxShadow,
        },
    }) => `
        background: ${background};
        border: 1px solid ${light};
        border-radius: 0 0 5px 5px;
        box-shadow: ${boxShadow};
    `}
    display: grid;
    width: 75vw;
    max-width: 1000px;
`

export const Coll = styled(_Collapse)`
    grid-column: 1;
    grid-row: 1;
`

export const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem 0 2rem;
`

export const HeaderContainer = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                medium,
            },
        },
    }) => `
        font-family: ${family};
        font-size: calc(${medium} - 0.5rem);
    `}
    display: flex;
`

export const CollapseHeader = styled.div`
    flex: 1;
`

export const CollapseClose = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
            },
            colors: { dark },
        },
    }) => `
        color: ${dark};
        font-family: ${family};
    `}
    cursor: pointer;
`

export const DescriptionContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
`

export const CollapseDescription = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                xsmall,
            },
        },
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
    `}
    text-align: justify;
`

export const LanguagesContainer = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                xsmall,
            },
            colors: { accent },
        },
    }) => `
        font-family: ${family};
        font-size: calc(${xsmall} - 0.2rem);
        color: ${accent};
    `}
    display: flex;
    font-weight: bold;
    margin-top: 1rem;
`
