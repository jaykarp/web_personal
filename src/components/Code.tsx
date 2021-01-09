import React from 'react'
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark'

import { CodeContainer, CodeHeader, Dot, StyledCode } from './styles/CodeStyles'

interface Props {
    children: string
    color: string
    language: string
}

const Code = ({ color, language, children: code }: Props) => {
    return (
        <CodeContainer>
            <CodeHeader>
                <Dot />
                <Dot />
                <Dot />
            </CodeHeader>
            <StyledCode
                color={color}
                customStyle={{
                    color: 'rgb(256, 256, 256)',
                    fontSize: '0.5rem',
                }}
                codeTagProps={{
                    color: 'rgb(256, 256, 256)',
                    fontSize: '0.5rem',
                }}
                language={language}
                style={a11yDark}
            >
                {code}
            </StyledCode>
        </CodeContainer>
    )
}

export default Code
