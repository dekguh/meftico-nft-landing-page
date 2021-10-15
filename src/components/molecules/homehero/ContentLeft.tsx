import React from 'react'
import ButtonOutline from '../../atoms/control/ButtonOutline'
import ButtonPrimary from '../../atoms/control/ButtonPrimary'
import LabelSection from '../../atoms/control/LabelSection'

const ContentLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink lg:w-5/12 lg:px-10'>
            <div>
                <LabelSection
                    text='NFT Market'
                />
            </div>

            <h1 className='text-3xl lg:text-5xl xl:text-6xl text-white font-bold mb-5'>
                Discover Best Artworks by <span className='text-gradient-primary'>World Artists</span>
            </h1>

            <p className='mb-8 text-white leading-relaxed'>
            Find various types of the best artworks around the world, collect and sell them at high prices. This platform will make it easier for you.
            </p>

            <div className='mt-5 flex flex-row flex-nowrap'>
                <div className='mr-4'>
                    <ButtonPrimary
                        text='See Chart'
                    />
                </div>

                <div>
                    <ButtonOutline
                        text='Marketplace'
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentLeft
