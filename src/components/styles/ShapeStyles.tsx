import styled, { keyframes, css } from 'styled-components/macro'

const move = (rotation: string, x: number) => keyframes`
    0% {
        transform: rotate(${rotation}) translate(${x}px, ${x}px);
    }
    50% {
        transform: rotate(${rotation}) translate(0, 0);
    }
    100% {
        transform: rotate(${rotation}) translate(${x}px, ${x}px);
    }
`

type ShapeProps = {
    rotation: string
    top: string
    left: string
    xtop: string
    xleft: string
    size: string
}

export const StyledShape = styled.img<ShapeProps>`
    ${({ rotation, top, left, xtop, xleft, size }) => css`
        top: ${top};
        left: ${left};
        transform: rotate(${rotation});
        height: ${size};
        animation: ${() => move(rotation, Math.random() * 3 + 5)}
            ${Math.random() * 2 + 3}s ease-in-out infinite;
        @media (max-width: 768px) {
            top ${xtop};
            left ${xleft};
        }
    `}
    will-change: transform;
    position: absolute;
    width: 100%;
    max-width: 1200px;
    z-index: 50;
`
