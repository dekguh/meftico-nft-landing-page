import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const FeaturedLink : React.FC = () => {
    return (
        <>
            <h4 className='mb-4 text-white font-bold text-2xl'>Featured Link</h4>
            <ul>
                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>Contact us
                    </a>
                </li>

                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>Terms of service
                    </a>
                </li>

                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>privacy & Policy
                    </a>
                </li>

                <li className='mb-2'>
                    <a href="#" className='text-white hover:text-pink duration-300 flex flex-row flex-nowrap'>
                        <i className='mr-1'><BsChevronRight /></i>Gallery
                    </a>
                </li>
            </ul>
        </>
    )
}

export default FeaturedLink