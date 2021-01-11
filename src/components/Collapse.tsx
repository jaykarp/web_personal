import React, { forwardRef, useEffect, useRef, useState } from 'react'
// import { Collapse as Coll } from 'react-collapse'
import {
    Coll,
    CollapseClose,
    CollapseContainer,
    CollapseDescription,
    CollapseHeader,
    CollapseWrapper,
    DescriptionContainer,
    HeaderContainer,
    LanguagesContainer,
} from './styles/CollapseStyles'
import './styles/CollapseStyles.css'

interface Props {
    open: Array<boolean>
    setOpen: React.Dispatch<React.SetStateAction<boolean[]>>
}

const Collapse = ({ open, setOpen }: Props, ref: any) => {
    const [copen, setCopen] = useState([false, false, false])
    const isFirst = useRef(true)
    const isAnimating = useRef(false)

    const arrEq = (a: Array<boolean>, b: Array<boolean>) =>
        JSON.stringify(a) === JSON.stringify(b)

    useEffect(() => {
        if (!arrEq(open, copen)) {
            if (isFirst.current) {
                isFirst.current = false
                setCopen(open)
            } else if (!isAnimating.current) {
                setCopen([false, false, false])
                isAnimating.current = true
                setTimeout(() => {
                    setCopen(open)
                    isAnimating.current = false
                }, 600)
            }
        }
    }, [open, copen])

    return (
        <CollapseContainer ref={ref}>
            <Coll isOpened={copen[0]}>
                <CollapseWrapper>
                    <HeaderContainer>
                        <CollapseHeader>Musely.</CollapseHeader>
                        <CollapseClose
                            onClick={() => {
                                setOpen([false, false, false])
                                setCopen([false, false, false])
                                isFirst.current = true
                            }}
                        >
                            x
                        </CollapseClose>
                    </HeaderContainer>
                    <DescriptionContainer>
                        <CollapseDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis non venenatis justo. Proin tellus tortor,
                            venenatis in ipsum vestibulum, posuere ultricies
                            risus. Pellentesque lobortis, leo non viverra
                            vestibulum, metus velit pulvinar sapien, non
                            suscipit massa odio quis nisl. Curabitur vulputate
                            tellus vitae tortor vestibulum, et accumsan leo
                            laoreet. Nam id est sit amet nunc rutrum convallis.
                            Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Proin sapien
                            purus, sagittis nec elementum vitae, suscipit sed
                            erat.
                            <br />
                            Aenean elementum finibus mi sed pretium. Sed eu
                            libero eget velit lobortis feugiat eu id orci. Nam
                            nec venenatis mauris, eu viverra sapien. Nullam
                            vehicula, arcu sed pulvinar tempor, odio tortor
                            gravida justo, non feugiat arcu felis id risus.
                            Mauris facilisis venenatis libero sed accumsan.
                            Proin pellentesque ex sit amet mi tempus mattis.
                            Nunc vel faucibus nunc. Integer a erat ut ante
                            blandit vehicula non vitae ipsum. Vivamus semper
                            justo ut dapibus pharetra.
                        </CollapseDescription>
                        <LanguagesContainer>
                            REACT.JAVASCRIPT.REDUX.BALSAMIQ.FIGMA
                        </LanguagesContainer>
                    </DescriptionContainer>
                </CollapseWrapper>
            </Coll>
            <Coll isOpened={copen[1]}>
                <CollapseWrapper>
                    <HeaderContainer>
                        <CollapseHeader>par-sort.</CollapseHeader>
                        <CollapseClose
                            onClick={() => {
                                setOpen([false, false, false])
                                setCopen([false, false, false])
                                isFirst.current = true
                            }}
                        >
                            x
                        </CollapseClose>
                    </HeaderContainer>
                    <DescriptionContainer>
                        <CollapseDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis non venenatis justo. Proin tellus tortor,
                            venenatis in ipsum vestibulum, posuere ultricies
                            risus. Pellentesque lobortis, leo non viverra
                            vestibulum, metus velit pulvinar sapien, non
                            suscipit massa odio quis nisl. Curabitur vulputate
                            tellus vitae tortor vestibulum, et accumsan leo
                            laoreet. Nam id est sit amet nunc rutrum convallis.
                            Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Proin sapien
                            purus, sagittis nec elementum vitae, suscipit sed
                            erat.
                            <br />
                            Aenean elementum finibus mi sed pretium. Sed eu
                            libero eget velit lobortis feugiat eu id orci. Nam
                            nec venenatis mauris, eu viverra sapien. Nullam
                            vehicula, arcu sed pulvinar tempor, odio tortor
                            gravida justo, non feugiat arcu felis id risus.
                            Mauris facilisis venenatis libero sed accumsan.
                            Proin pellentesque ex sit amet mi tempus mattis.
                            Nunc vel faucibus nunc. Integer a erat ut ante
                            blandit vehicula non vitae ipsum. Vivamus semper
                            justo ut dapibus pharetra.
                        </CollapseDescription>
                        <LanguagesContainer>
                            HASKELL.STACK.THREADSCOPE
                        </LanguagesContainer>
                    </DescriptionContainer>
                </CollapseWrapper>
            </Coll>
            <Coll isOpened={copen[2]}>
                <CollapseWrapper>
                    <HeaderContainer>
                        <CollapseHeader>paxos checker.</CollapseHeader>
                        <CollapseClose
                            onClick={() => {
                                setOpen([false, false, false])
                                setCopen([false, false, false])
                                isFirst.current = true
                            }}
                        >
                            x
                        </CollapseClose>
                    </HeaderContainer>
                    <DescriptionContainer>
                        <CollapseDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis non venenatis justo. Proin tellus tortor,
                            venenatis in ipsum vestibulum, posuere ultricies
                            risus. Pellentesque lobortis, leo non viverra
                            vestibulum, metus velit pulvinar sapien, non
                            suscipit massa odio quis nisl. Curabitur vulputate
                            tellus vitae tortor vestibulum, et accumsan leo
                            laoreet. Nam id est sit amet nunc rutrum convallis.
                            Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Proin sapien
                            purus, sagittis nec elementum vitae, suscipit sed
                            erat.
                            <br />
                            Aenean elementum finibus mi sed pretium. Sed eu
                            libero eget velit lobortis feugiat eu id orci. Nam
                            nec venenatis mauris, eu viverra sapien. Nullam
                            vehicula, arcu sed pulvinar tempor, odio tortor
                            gravida justo, non feugiat arcu felis id risus.
                            Mauris facilisis venenatis libero sed accumsan.
                            Proin pellentesque ex sit amet mi tempus mattis.
                            Nunc vel faucibus nunc. Integer a erat ut ante
                            blandit vehicula non vitae ipsum. Vivamus semper
                            justo ut dapibus pharetra.
                        </CollapseDescription>
                        <LanguagesContainer>
                            GOLANG.PYTHON.BASH
                        </LanguagesContainer>
                    </DescriptionContainer>
                </CollapseWrapper>
            </Coll>
        </CollapseContainer>
    )
}

export default forwardRef<HTMLDivElement, Props>(Collapse)
