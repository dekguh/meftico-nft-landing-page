import React from 'react'

const NavBrand : React.FC<INavBrand> = (props) => {
    return (
        <div className='flex-grow-0 flex-shrink pr-4'>
            <h2 className='text-gradient-primary text-4xl'>{props.title}</h2>
        </div>
    )
}

export default NavBrand
