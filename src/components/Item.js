import PropTypes from 'prop-types'
function Item({marca, ano_lançamento}){
    return(
        <>
            <li>
                {marca} - {ano_lançamento}
            </li>
        </>
    )
}

Item.propTypes = {
    //embora na página funcione, no console log indica erro se o tipo vier errado
    marca: PropTypes.string.isRequired,
    ano_lançamento: PropTypes.number,

}

Item.defaultProps={
    //valores padrao
    //escolher entre este e isRequired, pois valores padrao inutilizam o de cima
    marca: "Faltou a marca",
    ano_lançamento: 0,
}

export default Item