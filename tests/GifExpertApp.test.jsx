import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { useFetchGifs } from "../src/hooks/useFetchGifs";
import { AddCategory } from '../src/componenets/AddCategory'

describe('testing GifExpertApp()', () => {


    test('testing that h1 existes and have good content', () =>{

        render(<GifExpertApp />)

        expect( screen.getByRole('heading', { level: 1}).innerHTML).toBe( 'GifExpertApp' )
    })


   

    test('testing that onAddCategory works ', async () => {
        
       const inputValue = 'Dragon Ball'
       const inputValue2 = 'Saitama'

        render(<GifExpertApp/>)
        
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
                
        fireEvent.input( input, { target: {value: inputValue }})
        fireEvent.submit( form ) //añadimos Dragon Ball


        fireEvent.input( input, { target: {value: inputValue2 }})
        fireEvent.submit( form ) //añadimos Satiama


        fireEvent.input( input, { target: {value: inputValue }})
        fireEvent.submit( form ) //añadimos Dragon Ball otra vez
        



        // screen.debug()
        expect( screen.getAllByRole('heading', {level: 3}).length).toBe(3) // esperamos 3, one punch, dragon ball y saitama
        expect( screen.getAllByText('Dragon Ball').length).toBe(1) // esperamos solo 1 dragon ball
        
    }) //La clave es tener en cuenta que no debes tocar nada de los componentes hijos, simplemente saber que estan alli y que funcionan bien


})