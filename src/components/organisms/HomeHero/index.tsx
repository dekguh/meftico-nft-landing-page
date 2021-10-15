import React from 'react'
import ContentLeft from '../../molecules/homehero/ContentLeft'
import ContentRight from '../../molecules/homehero/ContentRight'

const HomeHero : React.FC = () => {
    return (
        <div className='container mx-auto px-4 flex flex-col lg:flex-row flex-nowrap items-center py-10'>
            <ContentLeft />
            <ContentRight />
        </div>
    )
}

export default HomeHero
