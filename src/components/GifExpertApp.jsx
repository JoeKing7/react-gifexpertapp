import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const cat = ['Gokú'];

    const [categories, setCategories] = useState(cat);

    // const handleAdd = () => {
    //     setCategories([
    //         ...categories,
    //         'New elemente'
    //     ])
    // };

    return (
        <div>
            <h2>GifExpertAPP</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr></hr>
            <ol>
                {
                    categories.map( (ele) => (
                        <GifGrid 
                            key={ele}
                            category={ ele }>
                        </GifGrid>
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
