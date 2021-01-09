import styled from 'styled-components/macro'

type JobProps = {
    isLeft: boolean
}

export const JobContainer = styled.div<JobProps>`
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
    display: flex;
    justify-content: center;
    margin: 2rem 6rem;
`

export const JobHeader = styled.div<JobProps>`
    ${({
        theme: {
            fonts: {
                body: { family },
                medium,
            },
        },
    }) => `
        font-family: ${family};
        font-size: ${medium};
    `}
    margin: 0 3rem 0.5rem 3rem;
`

export const JobImgContainer = styled.div<JobProps>`
    ${({ isLeft }) => `
        justify-content: ${isLeft ? 'flex-end' : 'flex-start'}; 
    `}
    display: flex;
    align-items: center;
    flex: 1 1 0;
`

export const JobImgBackground = styled.div<JobProps>`
    ${({
        theme: {
            colors: { medium, dark },
            borderRadius,
        },
        isLeft,
    }) => `
        background: ${isLeft ? medium : dark};
        border-radius: ${borderRadius};
    `}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
`

type ImgProps = {
    width: string
}

export const JobImg = styled.img<ImgProps>`
    width: ${({ width }) => width};
    max-width: 100%;
`

export const JobDescriptionContainer = styled.div<JobProps>`
    ${({ isLeft }) => `
        align-items: ${isLeft ? 'flex-start' : 'flex-end'}; 
        margin: ${isLeft ? '0 1rem 0 0' : '0 0 0 1rem'};
    `}
    display: flex;
    flex-direction: column;
    flex: 2 1 0;
`

export const JobDescription = styled.div`
    ${({
        theme: {
            fonts: {
                body: { family },
                small,
            },
        },
    }) => `
        font-family: ${family};
        font-size: ${small};
    `}
    margin: 1rem 0;
    text-align: justify;
`

export const JobLanguages = styled.div<JobProps>`
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
    margin: 0.4rem 0;
    font-weight: bold;
`

export const JobTagContainer = styled.div<JobProps>`
    display: flex;
`

export const JobTag = styled.div<JobProps>`
    ${({
        theme: {
            colors: { medium, dark },
            fonts: {
                body: { family },
                xsmall,
            },
            borderRadiusSmall,
        },
        isLeft,
    }) => `
        font-family: ${family};
        font-size: ${xsmall};
        background: ${isLeft ? medium : dark};
        margin: ${isLeft ? '0 0.3rem 0 0' : '0 0 0 0.3rem'};
        border-radius: ${borderRadiusSmall};
    `}}
    padding: 0.3rem;
    color: white;
`
