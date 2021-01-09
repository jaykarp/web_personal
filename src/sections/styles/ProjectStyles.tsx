import styled from 'styled-components/macro'

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
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
    position: relative;
    display: flex;
`
