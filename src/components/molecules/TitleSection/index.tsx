import React from 'react'
import LabelSection from '../../atoms/control/LabelSection'
import { ITitleSection } from '../../utils/types'

const TitleSection : React.FC<ITitleSection> = ({ subtitle, title, classes }) => {
    return (
        <div className={classes}>
            <LabelSection
                text={subtitle}
            />

            <h2 className='text-4xl text-white font-bold mt-2'>{title}</h2>
        </div>
    )
}

export default TitleSection
