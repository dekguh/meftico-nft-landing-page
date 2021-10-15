import { Link } from 'gatsby'
import React from 'react'
import { INavItem } from '../../utils/types'

const NavItem : React.FC<INavItem> = (props) => {
    return (
        <li className='flex-grow lg:flex-grow-0 mr-0 lg:mr-7 my-3 lg:my-2'>
            <Link className='text-white font-normal hover:text-pink duration-300' to={props.to}>{props.text}</Link>
        </li>
    )
}

export default NavItem
