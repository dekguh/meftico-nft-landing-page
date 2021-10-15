import React from 'react'

const ListPartner : React.FC = () => {
    return (
        <ul className='flex flex-row flex-wrap'>
            <li className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-3'>
                <img src="/partner/logo-1.png"  className='w-40 mx-auto' alt='partner'/>
            </li>

            <li className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-3'>
                <img src="/partner/logo-2.png"  className='w-40 mx-auto' alt='partner'/>
            </li>

            <li className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-3'>
                <img src="/partner/logo-3.png"  className='w-40 mx-auto' alt='partner'/>
            </li>

            <li className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-3'>
                <img src="/partner/logo-4.png"  className='w-40 mx-auto' alt='partner'/>
            </li>
        </ul>
    )
}

export default ListPartner
