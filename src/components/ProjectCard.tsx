import React from 'react'
import Code from './Code'
import {
    Arrow,
    Card,
    CardContainer,
    CardDescription,
    CardHeader,
    CardTag,
    CardTagContainer,
    More,
    MoreContainer,
} from './styles/ProjectCardStyles'

interface Props {
    title: string
    description: string
    code: string
    language: string
    tags: Array<string>
    color: string
    onClick: () => void
}

interface TagProps {
    children: Array<string>
}

const ProjectCard = ({
    title,
    description,
    code,
    language,
    tags,
    color,
    onClick,
}: Props) => {
    const Tags = ({ children: tags }: TagProps) => (
        <>
            {tags.map((t) => (
                <CardTag key={t} color={color}>
                    {t}
                </CardTag>
            ))}
        </>
    )

    return (
        <CardContainer>
            <Card>
                <CardHeader>{title}</CardHeader>
                <Code color={color} language={language}>
                    {code}
                </Code>
                <CardDescription>{description}</CardDescription>
                <CardTagContainer>
                    <Tags>{tags}</Tags>
                </CardTagContainer>
                <MoreContainer onClick={onClick}>
                    <Arrow>&rarr;&nbsp;</Arrow>
                    <More color={color}>more</More>
                </MoreContainer>
            </Card>
        </CardContainer>
    )
}

export default ProjectCard
