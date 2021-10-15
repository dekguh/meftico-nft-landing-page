import React from 'react'
import ListAuction from '../../molecules/list/ListAuction'
import TitleSection from '../../molecules/TitleSection'

const LatestAuction : React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                title='Latest Auction'
                subtitle='Be First Bid'
                classes='text-center mb-10'
            />

            <ListAuction />
        </div>
    )
}

export default LatestAuction
