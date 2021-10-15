import React, { useState } from 'react'
import NavBrand from '../../molecules/navigation/NavBrand'
import NavButton from '../../molecules/navigation/NavButton'
import NavList from '../../molecules/navigation/NavList'
import NavToggle from '../../molecules/navigation/NavToggle'

const Navigation : React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className='bg-navy-secondary px-4 py-5'>
            <div className='container mx-auto flex flex-row flex-wrap xl:flex-nowrap items-center'>
                <NavBrand title='Meftico' />

                <NavToggle btnClick={() => setIsActive(!isActive)} />

                <NavList isActive={isActive} />

                <NavButton />
            </div>
        </div>
    )
}

export default Navigation
