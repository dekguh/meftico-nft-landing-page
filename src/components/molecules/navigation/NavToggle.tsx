import React from 'react'
import ButtonOutline from '../../atoms/control/ButtonOutline'
import { INavToggle } from '../../utils/types'

const NavToggle : React.FC<INavToggle> = ({ btnClick }) => {
    return (
        <div className='flex-grow flex-shrink lg:hidden'>
            <div className='block text-right'>
                <ButtonOutline
                    text='Menu'
                    onClick={btnClick}
                />
            </div>
        </div>
    )
}

export default NavToggle
