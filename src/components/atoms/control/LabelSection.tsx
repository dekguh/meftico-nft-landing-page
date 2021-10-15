import React from 'react'
import { ILabelSection } from '../../utils/types'

const LabelSection : React.FC<ILabelSection> = ({ text }) => {
    return (
        <span className='text-pink'>
            {text}
        </span>
    )
}

export default LabelSection
