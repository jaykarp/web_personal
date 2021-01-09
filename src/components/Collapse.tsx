import React, { useEffect, useState } from 'react'
// import { Collapse as Coll } from 'react-collapse'
import { Coll, CollapseContainer } from './styles/CollapseStyles'
import './styles/CollapseStyles.css'

interface Props {
    open: Array<boolean>
}

const Collapse = ({ open }: Props) => {
    const [copen, setCopen] = useState([false, false, false])

    useEffect(() => {
        if (JSON.stringify(open) !== JSON.stringify(copen)) {
            setCopen([false, false, false])
            if (!copen.some((v) => v)) {
                setCopen(open)
            } else {
                setTimeout(() => setCopen(open), 500)
            }
        }
    }, [open, copen])

    return (
        <CollapseContainer>
            <Coll isOpened={copen[0]}>
                <div>Musely.</div>
            </Coll>
            <Coll isOpened={copen[1]}>
                <div>par-sort.</div>
            </Coll>
            <Coll isOpened={copen[2]}>
                <div>paxos checker.</div>
            </Coll>
        </CollapseContainer>
    )
}

export default Collapse
