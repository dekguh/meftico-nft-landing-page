import React from 'react'
import FeaturedLink from '../../molecules/footer/FeaturedLink'
import FooterAbout from '../../molecules/footer/FooterAbout'
import FooterMap from '../../molecules/footer/FooterMap'
import QuickLink from '../../molecules/footer/QuickLink'

const Footer : React.FC = () => {
    return (
    <>
        <div className='container mx-auto flex flex-row flex-wrap bg-navy-ascent rounded-xl p-6'>
            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-4/12 p-2'>
                <FooterAbout />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 xl:w-2/12 p-2'>
                <QuickLink />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 xl:w-2/12 p-2'>
                <FeaturedLink />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 xl:w-4/12 p-2'>
                <FooterMap />
            </div>
        </div>

        <div className='container mx-auto py-4 px-4'>
            <span className='text-white text-center block'>Copyright © 2021 – Meftico. All Rights Reserved By Dekguh</span>
        </div>
    </>
    )
}

export default Footer
