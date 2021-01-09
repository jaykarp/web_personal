import React, { forwardRef } from 'react'
import {
    SkillsContainer,
    SkillsGrid,
    GridHeader,
    Header,
    GridLanguages,
    LanguagesContainer,
    LanguagesHeader,
    Language,
    GridFrameworks,
    FrameworksContainer,
    FrameworksLeft,
    FrameworksRight,
    FrameworksHeader,
    Framework,
    GridTechnologies,
    TechnologiesContainer,
    TechnologiesHeader,
    TechnologiesLeft,
    TechnologiesRight,
    Technology,
    LRContainer,
} from './styles/SkillsStyles'

interface Props {}

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <SkillsContainer ref={ref}>
            <SkillsGrid>
                <GridHeader>
                    <Header>Skills</Header>
                </GridHeader>
                <GridLanguages>
                    <LanguagesContainer>
                        <LanguagesHeader>Languages.</LanguagesHeader>
                        <Language>Typescript & Javascript</Language>
                        <Language>HTML & CSS</Language>
                        <Language>C & C++</Language>
                        <Language>C#</Language>
                        <Language>Java</Language>
                        <Language>Golang</Language>
                        <Language>SQL</Language>
                        <Language>Haskell</Language>
                        <Language>Ruby</Language>
                        <Language>Bash</Language>
                        <Language>Mips Assembly</Language>
                        <Language>LaTeX</Language>
                        <Language>Rust</Language>
                    </LanguagesContainer>
                </GridLanguages>
                <GridFrameworks>
                    <FrameworksContainer>
                        <LRContainer>
                            <FrameworksLeft>
                                <FrameworksHeader>Frameworks.</FrameworksHeader>
                                <Framework>React</Framework>
                                <Framework>Styled UI</Framework>
                                <Framework>Svelte</Framework>
                                <Framework>Node.js</Framework>
                                <Framework>GraphQL</Framework>
                                <Framework>Bootstrap</Framework>
                                <Framework>JQuery</Framework>
                            </FrameworksLeft>
                            <FrameworksRight>
                                <Framework>Django</Framework>
                                <Framework>NumPy</Framework>
                                <Framework>Selenium</Framework>
                                <Framework>Flask</Framework>
                                <Framework>Tensorflow</Framework>
                                <Framework>Ruby On Rails</Framework>
                                <Framework>Unity</Framework>
                                <Framework>Parse</Framework>
                            </FrameworksRight>
                        </LRContainer>
                    </FrameworksContainer>
                </GridFrameworks>
                <GridTechnologies>
                    <TechnologiesContainer>
                        <TechnologiesHeader>Technologies.</TechnologiesHeader>
                        <LRContainer>
                            <TechnologiesLeft>
                                <Technology>Vim</Technology>
                                <Technology>TMUX</Technology>
                                <Technology>Zsh & Fsh</Technology>
                                <Technology>VS Code</Technology>
                                <Technology>Microsoft Office</Technology>
                                <Technology>Git & Github</Technology>
                                <Technology>G Suite</Technology>
                                <Technology>Docker</Technology>
                                <Technology>Kubernetes</Technology>
                            </TechnologiesLeft>
                            <TechnologiesRight>
                                <Technology>AWS</Technology>
                                <Technology>Google Cloud</Technology>
                                <Technology>Firebase</Technology>
                                <Technology>Heroku</Technology>
                                <Technology>&nbsp;</Technology>
                                <Technology>Balsamiq</Technology>
                                <Technology>Figma</Technology>
                                <Technology>Zeplin</Technology>
                                <Technology>MailChimp</Technology>
                            </TechnologiesRight>
                        </LRContainer>
                    </TechnologiesContainer>
                </GridTechnologies>
            </SkillsGrid>
        </SkillsContainer>
    )
})

export default Skills
