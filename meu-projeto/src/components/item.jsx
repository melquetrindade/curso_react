import PropTypes from 'prop-types'

function Item({marca = 'Marca não informada', lancamento = 0}){
    return(
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}

export default Item;