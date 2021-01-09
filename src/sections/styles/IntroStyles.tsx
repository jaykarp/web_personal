import styled from 'styled-components/macro'

export const IntroContainer = styled.div`
    height: calc(100vh - 4.2rem);
    max-height: 775px;
    min-height: 400px;
    display: flex;
    background: ${({
        theme: {
            colors: { background },
        },
    }) => background};
`

export const IntroTextContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const IntroImgContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`

export const IntroImg = styled.img`
    width: 60vh;
    max-width: 500px;
    min-height: 275px;
    min-width: 280px;
`

export const IntroText = styled.div`
    ${({
        theme: {
            colors: { black },
            fonts: {
                large,
                header: { family },
            },
        },
    }) => `
        color: ${black};
        font-size: ${large};
        font-family: ${family};
        
    `}
    padding-bottom: 20px;
`

export const IntroTextAccent = styled.div`
    ${({
        theme: {
            fonts: {
                large,
                header: { family },
            },
        },
        theme: {
            colors: { accent },
        },
    }) => `
        color: ${accent};
        font-size: ${large};
        font-family: ${family}; 
    `}
    padding-bottom: 20px;
`
