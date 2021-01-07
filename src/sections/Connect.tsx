import React, { forwardRef } from 'react'

interface Props {}

const Connect = forwardRef<HTMLDivElement>((props: Props, ref) => {
    return (
        <div ref={ref}>
            Connect
        </div>
    )
})

export default Connect
