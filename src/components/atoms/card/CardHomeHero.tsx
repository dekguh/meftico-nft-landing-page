import React from 'react'
import { ICardHomeHero } from '../../utils/types'

const CardHomeHero : React.FC<ICardHomeHero> = ({ classes, title, description, icon }) => {
    return (
        <div className={`flex flex-row flex-nowrap bg-navy-ascent p-3 rounded-md w-56 items-center ${classes}`}>
            <div>
                <img src={icon} alt="crypto" className='w-16' />
            </div>

            <div className='pl-3'>
                <h4 className='font-bold text-purple mb-1'>{title}</h4>
                <span className='text-white block'>{description}</span>
            </div>
        </div>
    )
}

export default CardHomeHero
