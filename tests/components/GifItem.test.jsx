import { screen, render } from "@testing-library/react"
import { GifItem } from "../../src/componenets/GifItem"
describe('testing GifItem component', () => {
    const title = 'El titulo'
    const url = 'https://unaurl.com/'
    test('testing match snapshot', () => {
        
       
        const { container } = render( <GifItem title = { title } url={ url } />)
        expect( container ).toMatchSnapshot()
        
    
    })


    test('debe mostrar la imagen con el url y el alt indicado', () => {
        render( <GifItem url = {url} title={title}/>)

        // screen.debug()

        expect(screen.getByRole('img').src).toEqual(url)
        expect(screen.getByRole('img').alt).toEqual(title)
        //para simplificar codigo cuando hacemos varios "expect" (analizamos varios atributos o de varias formas) podemos hacerlo de la siguiente manera (desestructurando el objeto):
        const {src, alt} = screen.getByRole('img')
        expect( src ).toBe( src )
        expect( alt ).toBe( alt )
    })

    test('chequear el texto del parrafo', () => {
        render( <GifItem title = { title } url = { url }/>)
        expect( screen.getByText( title ) ).toBeTruthy() //Aqui deberia ser más especifico en muchos casos pero en este tenemos suficiente con esto
    })
})