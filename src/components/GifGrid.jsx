import React from 'react'; //, { useState, useEffect }
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);



    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>

            { loading && <p>Loading</p>}

            <div className="card-grid">


                {
                    images.map((ele) => (
                        <GifGridItem
                            key={ele.id}
                            {...ele}
                        />
                    ))
                }


            </div>
        </>
    )
}

export default GifGrid
