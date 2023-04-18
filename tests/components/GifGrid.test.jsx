import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/componenets"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs') // ocn esto le decimos que haga un mock de este path, debe estar importado

describe('pruebas GifGrid()', () => { 

    const category = 'One Punch'    
    
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        }) // al usar el jest.mock para el useFetchGifs, se rompe este hook y no es da error el codigo, entonces como estamos en simulación de la funcionalidad de este hook le atribuimos un retorno que nos vaya bien para este test. En este test sabemos que no se evalua las imagenes simplemente devolvemos un array vacio y que si se evalua su funcionalidad inicial (isLoading debe ser true.)

        render(<GifGrid category={ category } />)
        // screen.debug()

        expect( screen.getByText( 'Cargando...')).toBeTruthy()
        expect( screen.getByText( category )).toBeTruthy()

    })

    test('debe mostrar imagenes cuando se devuelvan el hook useFetchGif', () =>{


        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://xedfefefef.com/fjajaj.jpg'
            },
            {
                id: 'ABC1',
                title: 'Saitama',
                url: 'https://xedfefefef.com/fjajaj.jpg'
            },
            {
                id: 'ABC2',
                title: 'Saitama',
                url: 'https://xedfefefef.com/fjajaj.jpg'
            },
            {
                id: 'ABC3',
                title: 'Saitama',
                url: 'https://xedfefefef.com/fjajaj.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render( <GifGrid category={ category } />)

        // screen.debug()
        expect( screen.getAllByRole( 'img' ).length).toBe( 4 )// esperamos 4 imagenes pues el array tiene 4 elementos


    })//no se debe testear el hook aqui pues tendra su archivo de testing unitario


 })