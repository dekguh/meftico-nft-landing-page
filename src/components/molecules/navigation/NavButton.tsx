import React from 'react'
import ButtonOutline from '../../atoms/control/ButtonOutline'
import { INavButton } from '../../utils/types'

const NavButton : React.FC<INavButton> = ({ btnClick }) => {
    return (
        <div className='flex-grow-0 flex-shrink hidden xl:block'>
            <ButtonOutline text='Connect Wallet'/>
        </div>
    )
}

export default NavButton
