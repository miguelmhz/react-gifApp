import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        <div className='card-grid' >
            {loading && <p className=' animate__animated animate__flash'>Loading... </p>}
            <ol>
                {
                    images.map(img => {
                        return(
                            <GifGridItem key={img.id} {...img}/>
                            )
                    })
                }
            </ol>
        </div>
        </>
    )
}

export default GifGrid
