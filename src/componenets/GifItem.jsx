import PropTypes from 'prop-types'

export const GifItem = ({title, url}) => {
  return (
    <div className="card" >
        <img  src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}


/*
Tarea:

1. Añadir proptypes:
  - title obligatorio
  - url obligatoria

2. Evaluar snapshot
*/


GifItem.propTypes = {
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired
}