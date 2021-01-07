import React, { forwardRef } from 'react'

interface Props {}

const Projects = forwardRef<HTMLDivElement>((props: Props, ref) => {
    return <div ref={ref}>Projects</div>
})

export default Projects
