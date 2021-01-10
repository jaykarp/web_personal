import React from 'react'
import circle from '../assets/shapes/circle.svg'
import hexagon from '../assets/shapes/hexagon.svg'
import pentagon from '../assets/shapes/pentagon.svg'
import square from '../assets/shapes/square.svg'
import triangle from '../assets/shapes/triangle.svg'

import { StyledShape } from './styles/ShapeStyles'

interface Props {
    shape: 'square' | 'triangle' | 'circle' | 'pentagon' | 'hexagon'
    size: string
    rotation: string
    top: string
    left: string
}

const Shape = ({ shape, size, rotation, top, left }: Props) => {
    switch (shape) {
        case 'square':
            return (
                <StyledShape
                    src={square}
                    rotation={rotation}
                    size={size}
                    top={top}
                    left={left}
                />
            )
        case 'triangle':
            return (
                <StyledShape
                    src={triangle}
                    rotation={rotation}
                    size={size}
                    top={top}
                    left={left}
                />
            )
        case 'pentagon':
            return (
                <StyledShape
                    src={pentagon}
                    rotation={rotation}
                    size={size}
                    top={top}
                    left={left}
                />
            )
        case 'hexagon':
            return (
                <StyledShape
                    src={hexagon}
                    rotation={rotation}
                    size={size}
                    top={top}
                    left={left}
                />
            )
        default:
            return (
                <StyledShape
                    src={circle}
                    rotation={rotation}
                    size={size}
                    top={top}
                    left={left}
                />
            )
    }
}

export default Shape
