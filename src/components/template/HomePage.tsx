import React from 'react'
import HomeHero from '../organisms/HomeHero'
import LatestAuction from '../organisms/LatestAuction'
import Navigation from '../organisms/Navigation'
import PartnerSection from '../organisms/PartnerSection'

const HomePage : React.FC = () => {
    return (
        <div>
            <Navigation />

            <div>
                <HomeHero />
            </div>

            <div>
                <PartnerSection />
            </div>

            <div className='mt-20 py-10 bg-navy-secondary'>
                <LatestAuction />
            </div>
        </div>
    )
}

export default HomePage
