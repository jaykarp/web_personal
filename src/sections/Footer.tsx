import React, { useRef } from 'react'

interface Props {}

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            Footer
        </div>
    )
})

export default Footer
