import React from 'react'
import { IButton } from '../../utils/types'

const ButtonOutline : React.FC<IButton> = ({ onClick, text }) => {
    return (
        <button className='button button-outline' onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonOutline
