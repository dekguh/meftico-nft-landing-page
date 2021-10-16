import React from 'react'
import ContentLeft from '../../molecules/featureCollection/ContentLeft'
import ContentRight from '../../molecules/featureCollection/ContentRight'

const FeatureCollectionSection = () => {
    return (
        <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
            <ContentLeft />
            <ContentRight />
        </div>
    )
}

export default FeatureCollectionSection
