import { getGifs } from "../../src/helpers/getGifs"

describe('preubas en getGifs()', () => {

    test('debe retornar un arreglo de gifs', async () => {


        const gifs = await getGifs('One Punch')

        // console.log(gifs)

        expect( gifs.length ).toBeGreaterThan( 0 ) //comprovamos que devuele almenos un elemento
        expect( gifs[0] ).toEqual({
            id:expect.any( String ),
            title:expect.any( String ),
            url:expect.any( String ),
        }) //comprovamos que la estructura del primer elemento del array sea un objeto tal que así
    })
})