import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { ICardCollection } from '../../utils/types'

const CardCollection : React.FC<ICardCollection> = ({ author, authorVerified, title, image }) => {
    return (
        <div className='relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105'>
            <div style={{ backgroundImage: `url('${image}')` }} className='bg-no-repeat bg-center bg-cover rounded-lg pt-60 px-4 pb-4'>
            </div>

            <div className='mt-3'>
                <div className='flex flex-row flex-nowrap items-center'>
                    <h6 className='text-sm text-white'>{author}</h6>
                    {authorVerified && (
                        <span style={{ height: '12px', width: '12px' }} className='bg-blue-400 text-white rounded-full ml-1 relative block'>
                            <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4' style={{ fontSize: '10px' }}><BsCheck /></i>
                        </span>
                    )}
                </div>
                <a href='#' className='font-semibold text-pink text-lg mt-1'>{title}</a>
            </div>
        </div>
    )
}

export default CardCollection
