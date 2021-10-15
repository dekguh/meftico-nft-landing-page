import React from 'react'
import CardAuction from '../../atoms/card/CardAuction'
import { dataAuction } from '../../utils/data'

const ListAuction : React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
            {dataAuction.map((data, i) => (
                <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-3/12 p-3'>
                    <CardAuction
                        author={data.author}
                        authorVerified={data.authorVerified}
                        title={data.title}
                        bidPrice={data.bidPrice}
                        image={data.image}
                        date={data.date}
                        expired={data.expired}
                    />
                </div>
            ))}
        </div>
    )
}

export default ListAuction
