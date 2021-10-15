import React from 'react'
import { IButton } from '../../utils/types'

const ButtonPrimary : React.FC<IButton> = ({ onClick, text }) => {
    return (
        <button className='button button-primary' onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonPrimary
