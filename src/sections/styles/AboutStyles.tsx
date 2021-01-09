import styled from 'styled-components'

export const AboutContainer = styled.div`
    padding: 20px 0;
    display: flex;
    margin: 4rem 0;
`

export const CloudContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 0;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2 1 0;
`

export const AboutText = styled.div`
    ${({
        theme: {
            colors: { black },
            fonts: {
                small,
                body: { family },
            },
        },
    }) => `
        color: ${black};
        font-size: ${small};
        font-family: ${family};
        
    `}
    text-align: justify;
    width: 75%;
`

export const CloudImg = styled.img`
    width: 75%;
    min-width: 300px;
`
