import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Full Metal Alchemist: Brotherhood', 'The legend of Zelda: ToTK']);

    const onAddCategory = (newCategory) => {
        
        if( newCategory )
        // setCategories(categories => [...categories, 'Arcane']);
        setCategories([newCategory, ...categories]);
    }
    

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={ setCategories}
            onNewCategory={ onAddCategory }
        />
    
        { categories.map( category => (
                
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />
                // <div key={ category }>
                //     <h3>{ category }</h3>
                //     <li>{ category }</li>
                // </div>
            )
        )}





    </>
  )
}
