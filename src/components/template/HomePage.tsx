import React from 'react'
import HomeHero from '../organisms/HomeHero'
import Navigation from '../organisms/Navigation'

const HomePage : React.FC = () => {
    return (
        <div>
            <Navigation />
            <HomeHero />
        </div>
    )
}

export default HomePage
