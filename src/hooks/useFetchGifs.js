import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

// en realidad un hook es una función
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImgs = async () =>{
        const newImgs = await getGifs(category)
        setImages(newImgs)
        setIsLoading( false )
    }

    useEffect( () => {
        getImgs()       
    }, [] ) //si dejamos el array de dependencias vacio, solo se ejecutara la primera vez que se renderize el componente



    return {
        images,
        isLoading
    }
}
