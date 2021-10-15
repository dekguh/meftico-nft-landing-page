import React from 'react'
import NavItem from '../../atoms/NavItem'
import { INavList } from '../../utils/types'

const NavList : React.FC<INavList> = ({ isActive }) => {

    return (
        <div className='flex-grow flex-shrink xl:pr-4 relative w-full lg:w-auto'>
            <ul className={`flex flex-col lg:flex-row flex-nowrap justify-end absolute left-0 right-0 mt-5 lg:mt-0 mx-4 lg:mx-0 rounded-md lg:relative bg-navy-ascent lg:bg-color-none p-5 lg:p-0 ${isActive ? 'menu-toggle-active' : 'menu-toggle-nonactive'}`}>
                <NavItem
                    to='#'
                    text='Home'
                />

                <NavItem
                    to='#'
                    text='Top Collection'
                />

                <NavItem
                    to='#'
                    text='New Listing'
                />

                <NavItem
                    to='#'
                    text='How to order'
                />

                <NavItem
                    to='#'
                    text='Contact us'
                />
            </ul>
        </div>
    )
}

export default NavList
