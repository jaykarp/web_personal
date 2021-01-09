import React, { forwardRef, useState } from 'react'
import Collapse from '../components/Collapse'
import ProjectCard from '../components/ProjectCard'
import {
    CollapseContainer,
    ProjectCardContainer,
    ProjectsContainer,
    ProjectsHeader,
} from './styles/ProjectStyles'

interface Props {}

const musely_code = `store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'))`

const parsort_code = `shuffle :: V.Vector a -> IO (V.Vector a)
shuffle v = do
 let n = V.length v - 1
 js <- V.forM (V.enumFromTo 0 n) $ \i -> randomRIO (i, n)
 return $ V.create $ do
    o <- V.thaw v
    forM_ [1..n] $ \i -> M.swap o i (js!i)
    return o`

const paxos_code = `p1PreparePhase := func(s *base.State) bool {
  s1 := s.Nodes()["s1"].(*Server)
  valid := s1.proposer.Phase == Propose 
  if valid {
    fmt.Println("... p1 entered Propose phase")
  }
  return valid
}`

const Projects = forwardRef<HTMLDivElement>((props: Props, ref) => {
    const [open, setOpen] = useState([false, false, false])

    return (
        <ProjectsContainer ref={ref}>
            <ProjectsHeader>Projects</ProjectsHeader>
            <ProjectCardContainer>
                <ProjectCard
                    title={'musely.'}
                    description={
                        'a music note taking tool for the average student'
                    }
                    code={musely_code}
                    language={'javascript'}
                    tags={['UI & UX']}
                    color={'#779095'}
                    onClick={() =>
                        setOpen((open) =>
                            open.map((o, i) => (i === 0 ? true : false))
                        )
                    }
                />
                <ProjectCard
                    title={'par-sort.'}
                    description={
                        'parallel functional sorinting implementations in haskell'
                    }
                    code={parsort_code}
                    language={'haskell'}
                    tags={['Parallel Programming']}
                    color={'#7C9A8F'}
                    onClick={() =>
                        setOpen((open) =>
                            open.map((o, i) => (i === 1 ? true : false))
                        )
                    }
                />
                <ProjectCard
                    title={'paxos checker.'}
                    description={'distributed, stateful paxos error checking'}
                    code={paxos_code}
                    language={'go'}
                    tags={['Distributed Systems']}
                    color={'#57838C'}
                    onClick={() =>
                        setOpen((open) =>
                            open.map((o, i) => (i === 2 ? true : false))
                        )
                    }
                />
            </ProjectCardContainer>
            <CollapseContainer>
                <Collapse open={open} />
            </CollapseContainer>
        </ProjectsContainer>
    )
})

export default Projects
