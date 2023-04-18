import { AddCategory } from "../../src/componenets/AddCategory"
import { render, screen, fireEvent } from "@testing-library/react"


describe('pruebas en <AddCategory />',() =>{

    test('debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory  onNewCategory={ () => {} }/>)

        const input = screen.getByRole('textbox') //se coloca textbox en lugar de input, no se porque esta nomenclatura.

        fireEvent.input( input, {target: { value: 'Saitama' }} ) //el evento input (modificacion del value) se llama sobre el elmento input (defenido anteriormente) con los datos de de que evento.target.value = 'Saitama', 

        expect( input.value ).toBe( 'Saitama' )//comprovamos que dp del evento el elemento input tiene el value asignado y por lo tanto que la funcion onInputChange y el evento onChange funcionan correctamente.
        // screen.debug() 
    })


    test('simular el submit del formualrio', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn() //un Mock es +o- una simulacion // requerido para evaluar la función 

        render( <AddCategory  onNewCategory={ onNewCategory }/>) 

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue }}) //asignamos un valor al input para pasar la condicion "if( inputValue.trim().length <= 1) return" de la funcion onSubmit
        fireEvent.submit( form ) //lanzamos el evento submit en el form, para checkear que realmente se esta lanzad podemos usar un clg en la funcion lanzada del codigo real (no el testing)
        // screen.debug()
        expect( input.value ).toBe( '' ) // sabemos que el submit reinicia el inpu.value, comprovamos que sea así

        expect( onNewCategory ).toHaveBeenCalled() //comprovamos que se ha llamado a la función
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 ) //comprovamos que se ha llamado a la función 1 sola vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ) //comprovamos que se ha llamado a la función con el parametro de del input.value
    })

    test('evitar llamada cuando input.value no cumple .lenght <=1', () => {
        const inputValue = undefined
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } />)

         const input = screen.getByRole('textbox')
         const submit = screen.getByRole('form')

         fireEvent.input( input , { target: { value: inputValue}})
         fireEvent.submit ( submit )

         expect( onNewCategory ).not.toHaveBeenCalled()
    })
})