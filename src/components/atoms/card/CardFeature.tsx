import React from 'react'
import { ICardFeature } from '../../utils/types'

const CardFeature : React.FC<ICardFeature> = ({ icon, title }) => {
    return (
        <div className='relative bg-navy-ascent p-3 rounded-lg text-center'>
            <img src={icon} alt="feature" className=' w-14 mx-auto' />
            <h6 className='text-lg text-pink mt-1'>{title}</h6>
        </div>
    )
}

export default CardFeature
