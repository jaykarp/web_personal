import React, { forwardRef } from 'react'

interface Props {}

const Experience = forwardRef<HTMLDivElement>((props: Props, ref) => {
    return <div ref={ref}>Experience</div>
})

export default Experience
