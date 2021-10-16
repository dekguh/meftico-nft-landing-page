import React from 'react'
import CardFeature from '../../atoms/card/CardFeature'
import TitleSection from '../TitleSection'

const ContentRight : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-10'>
            <TitleSection
                title='Collection of Various Artwork'
                subtitle='Recommended Collection For You'
                classes='mb-4'
            />

            <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='Security'
                        icon='/icon/security.png'
                    />
                </div>

                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='Exhange'
                        icon='/icon/exchange.png'
                    />
                </div>

                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='Wallet'
                        icon='/icon/wallet.png'
                    />
                </div>

                <div className='flex-grow-0 flex-shrink w-6/12 md:w-3/12 p-2'>
                    <CardFeature
                        title='Invest'
                        icon='/icon/invest.png'
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentRight
