import React, { forwardRef } from 'react'

interface Props {}

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            Skills
        </div>
    )
})

export default Skills
