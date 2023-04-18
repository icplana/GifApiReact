// import React from 'react' no necesario desde React 17
import { useState } from "react"
import { PropTypes } from 'prop-types' //para poder usar hay que hacer yarn add prop-types o el respectivo npm
export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('')
    
    // const onInputChange = (event) => {
    //     setInputValue(event.target.value)
    // }
    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = event => {
        event.preventDefault()
        if( inputValue.trim().length <= 1) return
        // setCategories( categories => [...categories, inputValue])
        onNewCategory( inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange={ onInputChange }
            />
            <button
            onClick={ onSubmit }>Agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
