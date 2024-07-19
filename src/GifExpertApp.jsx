import { useState } from 'react'
import { AddCategory, GridGif } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = ( newCategory ) => {

        if (categories.includes( newCategory )) return;
        setCategories([newCategory, ...categories]);
        //setCategories( cat => [...categories, 'Bob Sponge']);

    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={ (value) => onAddCategory(value)} />

            {
                categories.map( ( category ) => (
                    <GridGif 
                        key={ category }
                        category={ category }
                    
                    />
                ))
            }
        </>
    )
}
