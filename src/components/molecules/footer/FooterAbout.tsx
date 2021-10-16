import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'

const FooterAbout : React.FC = () => {
    return (
        <>
            <h3 className='text-gradient-primary text-3xl font-bold mb-3'>Meftico</h3>
            <p className='text-white leading-relaxed mb-3'>
                We are a best platform to buy and sell NFT securely, founded in 2020 and have 50k active users every month.
            </p>
            <ul className='flex flex-row flex-wrap mt-2'>
                <li className='flex-grow-0 flex-shrink mr-2'>
                    <a className='text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative' href="#">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><FaFacebookF /></i>
                    </a>
                </li>

                <li className='flex-grow-0 flex-shrink mr-2'>
                    <a className='text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative' href="#">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsTwitter /></i>
                    </a>
                </li>

                <li className='flex-grow-0 flex-shrink mr-2'>
                    <a className='text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative' href="#">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsInstagram /></i>
                    </a>
                </li>

                <li className='flex-grow-0 flex-shrink mr-2'>
                    <a className='text-white w-10 h-10 rounded-lg bg-navy hover:bg-pink duration-300 block relative' href="#">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><RiLinkedinFill /></i>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default FooterAbout
