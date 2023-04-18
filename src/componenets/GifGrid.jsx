import { GifItem } from "./GifItem"
import PropTypes from 'prop-types'
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifExpertApp } from "../GifExpertApp"
export const GifGrid = ({ category, onDelCategory }) => {

    //Hook personalizado
    const { images, isLoading } = useFetchGifs( category )

    // const deleteCategory = (e) => {
    //     // const cat = e.target.previousSibling.innerHTML
    //     // const temporalArr = arr.filter( category => category !== cat )
    //     // setCategories(temporalArr)
    //     e.target.nextSibling.remove()
    //     e.target.previousSibling.remove()
    //     e.target.remove()
        
    // }

    return (
        <>
            <h3>{ category }</h3>
            
            {/* <button onClick={ GifExpertApp(deleteCategory) }>Delete</button> */}
               
                    <svg onClick={ onDelCategory } xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24">
                        <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z">
                        </path>
                    </svg>
          
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifItem 
                            key= {img.id} 
                            { ...img }
                        /> 
                    ))
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    // onDelCategory: PropTypes.func.isRequired
}