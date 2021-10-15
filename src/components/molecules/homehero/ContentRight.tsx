import React from 'react'
import CardHomeHero from '../../atoms/card/CardHomeHero'

const ContentRight = () => {
    return (
        <div className='flex-grow-0 flex-shrink lg:w-7/12 relative'>
            <img src="/NFT-network.png" className='w-full' alt="home hero" />

            <CardHomeHero
                title='BTC/USD'
                description='$12,453'
                icon='/icon/bitcoin.png'
                classes='absolute top-2/4 xl:left-20 transform -translate-y-2/4'
            />

            <CardHomeHero
                title='Z-CASH/USD'
                description='$353'
                icon='/icon/z-cash.png'
                classes='absolute top-6 md:top-32 lg:top-40 right-4 md:right-10 xl:right-20'
            />

            <CardHomeHero
                title='ETH/USD'
                description='$2,453'
                icon='/icon/ethereum-accepted-here.png'
                classes='absolute bottom-6 md:bottom-32 lg:bottom-40 right-4 md:right-10 xl:right-20'
            />
        </div>
    )
}

export default ContentRight
