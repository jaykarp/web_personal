import React from 'react'
import gruvbox from 'react-syntax-highlighter/dist/esm/styles/hljs/gruvbox-dark'
import atom1 from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark'
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus'
import cb from 'react-syntax-highlighter/dist/esm/styles/prism/cb'
import twilight from 'react-syntax-highlighter/dist/esm/styles/prism/twilight'

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
