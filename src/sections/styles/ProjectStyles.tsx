import styled from 'styled-components/macro'

export const WidthManager = styled.div`
    /* background: ${({
        theme: {
            colors: { white },
        },
    }) => white}; */
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -22rem;
    z-index: 1;
    position: relative;
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    margin: 4rem 0;
    width: 100%;
    max-width: 1200px;
`

export const ProjectCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`

export const ProjectsHeader = styled.div`
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
`
export const CollapseContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 6rem;
`

export const ProjectSpacer = styled.div`
    ${({
        theme: {
            colors: { white },
        },
    }) => `
        background: ${white}; 
    `}
    z-index: 0;
    width: 150%;
    height: 34rem;
    border-radius: 50%;
    min-width: 1255px;
    transform: rotate(-2deg);
    margin-top: -27rem;
    margin-bottom: -6rem;
`
