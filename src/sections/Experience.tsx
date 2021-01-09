import React, { forwardRef } from 'react'
import Job from '../components/Job'
import ceal from '../assets/ceal.png'
import navstick from '../assets/navstick.svg'
import cheddar from '../assets/cheddar.svg'
import vanderbilt from '../assets/vanderbilt.png'

import {
    ExperienceHeader,
    ExperienceContainer,
} from './styles/ExperienceStyles'

interface Props {}

const Experience = forwardRef<HTMLDivElement>((props: Props, ref) => {
    return (
        <ExperienceContainer ref={ref}>
            <ExperienceHeader>Experience</ExperienceHeader>
            <Job
                title={'ceal.'}
                logo={ceal}
                description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non venenatis justo. Proin tellus tortor, venenatis in ipsum vestibulum, posuere ultricies risus. Pellentesque lobortis, leo non viverra vestibulum, metus velit pulvinar sapien, non suscipit massa odio quis nisl. Curabitur vulputate tellus vitae tortor vestibulum, et accumsan leo laoreet. Nam id est sit amet nunc rutrum convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. '
                }
                languages={['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON']}
                tags={['UI & UX', 'Fullstack Dev']}
                left
            />
            <Job
                title={'navstick.'}
                logo={navstick}
                description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non venenatis justo. Proin tellus tortor, venenatis in ipsum vestibulum, posuere ultricies risus. Pellentesque lobortis, leo non viverra vestibulum, metus velit pulvinar sapien, non suscipit massa odio quis nisl. Curabitur vulputate tellus vitae tortor vestibulum, et accumsan leo laoreet. Nam id est sit amet nunc rutrum convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. '
                }
                languages={['REACT', 'PYTHON', 'BASH', 'C#', 'UNITY', 'PARSE']}
                tags={['UI & UX', 'Fullstack Dev']}
                width={'60%'}
                right
            />
            <Job
                title={'cheddar.'}
                logo={cheddar}
                description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non venenatis justo. Proin tellus tortor, venenatis in ipsum vestibulum, posuere ultricies risus. Pellentesque lobortis, leo non viverra vestibulum, metus velit pulvinar sapien, non suscipit massa odio quis nisl. Curabitur vulputate tellus vitae tortor vestibulum, et accumsan leo laoreet. Nam id est sit amet nunc rutrum convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. '
                }
                languages={['REACT', 'GOLANG', 'RUBY']}
                tags={['UI & UX', 'Fullstack Dev', 'DevOps']}
                width={'75%'}
                left
            />
            <Job
                title={'vanderbilt.'}
                logo={vanderbilt}
                description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non venenatis justo. Proin tellus tortor, venenatis in ipsum vestibulum, posuere ultricies risus. Pellentesque lobortis, leo non viverra vestibulum, metus velit pulvinar sapien, non suscipit massa odio quis nisl. Curabitur vulputate tellus vitae tortor vestibulum, et accumsan leo laoreet. Nam id est sit amet nunc rutrum convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. '
                }
                languages={['JAVASCRIPT', 'JAVA', 'PYTHON']}
                tags={['NLP', 'Statistics', 'UI & UX']}
                width={'75%'}
                right
            />
        </ExperienceContainer>
    )
})

export default Experience
