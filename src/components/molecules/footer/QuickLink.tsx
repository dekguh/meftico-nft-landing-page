import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const QuickLink : React.FC = () => {
    return (
        <>
            <h4 className='mb-4 text-white font-bold text-2xl'>Quick Link</h4>
            <ul>
                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>Home
                    </a>
                </li>

                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>Marketplace
                    </a>
                </li>

                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>Deposit
                    </a>
                </li>

                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>See Charth
                    </a>
                </li>
            </ul>
        </>
    )
}

export default QuickLink