// import React from 'react'       no es necesario desde la version 17 de React

import { useState } from "react"
import { AddCategory, GifGrid } from "./componenets" // hace referencia al archivo de barrill para hacer mas legiles las importaciones


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch'])
  
    const onAddCategory = (newCategory) => {
        if ( categories.includes( newCategory )) {
            console.log('categoria existente')
            return}
        // console.log(newCategory)
        setCategories([ newCategory, ...categories])
        // setCategories(cat => [...cat, 'Valorant'])
        
    }

    // const deleteCategory = (e) => {
    //     const cat = e.target.previousSibling.innerHTML
    //     const arr = categories
    //     const temporalArr = arr.filter( category => category !== cat )
    //     setCategories(temporalArr)
    // }

    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory = { event => onAddCategory(event)}
        />

        { 
            categories.map( (category,i,arr) =>(
                <GifGrid 
                key={ category } 
                category={ category }
                arr = { arr }
                />            
            )) 
        }
            
    </>
  )
}


// const apiKey = 'MfhRWwqIRA55zbjQTF4CV9EYZeYM47RE'