import React from 'react'
import CardCollection from '../../atoms/card/CardCollection'

const ContentLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0'>
            <div className='relative'>
                <img src="/NFT-frame-art.png" alt="featured" className='w-full' />

                <div className='absolute bottom-0 md:bottom-10 w-64 md:w-72'>
                    <CardCollection
                        title='Collection of abstract'
                        author='gachalifes'
                        authorVerified={true}
                        image='/collection/collection-1.jpg'
                    />
                </div>

                <div className='absolute right-0 top-0 md:top-10 w-64 md:w-72'>
                    <CardCollection
                        title='Collection world is violet'
                        author='whynotchooseme'
                        authorVerified={true}
                        image='/collection/collection-2.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentLeft
