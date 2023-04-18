import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs} from '../../src/hooks/useFetchGifs'

describe('pruebas en el hook useFetchGifs()', () => {
    

    test('que debe de regeresar al estado inicial', () => {

        //para probar hooks es necesario usar el renderHook porque un hook no puede llamarse sin mas, debe estar dentro de un componente de react
        const { result } = renderHook( () => useFetchGifs( 'One Punch' ))
        // console.log(result)
        const { images, isLoading } = result.current // valor inicial!!

        expect( images.length ).toBe( 0 ) // Estamos en ell estado inicial por lo tanto no debe retornarse nada aun
        expect( isLoading ).toBeTruthy() // = esperamos que este true
        
    })

    test('comprovamos que carga las imagenes y cambia el isloading', async () => {
        const { result } = renderHook( () => useFetchGifs( 'One Punch' ))
      
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
            {
                timeout:1000
            } // esta funcion espera que la condicion del expect se cumpla, puedes indicarle con un segundo parametro el tiempo maximo de espera antes de lanzar un error (con un objeto y la propiedad timeout), si no se indica nada el timeout es de 1000ms
        )


        
    }) //para poder analizar la respuesta del hook debemos trabajar en asincrono, para ello ñadimos el async el cb del test y usamos el await waitFor(), waitFor se debe importar de la libreria testing-library (al igual que screen i render)
})