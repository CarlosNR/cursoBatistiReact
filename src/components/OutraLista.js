import {useState} from 'react'

function OutraLista({itens}){
    return(
        <>
            <h3>Lista de itens:</h3>
            {/* como retorno eh jsx, a arrow fica com => () */}
            {/* react reclama de kd item do array n ter um index unico, entao, usar o index fornecido pela map */}
            {/* if else a la react */}
            {/* indice: para o html, key, para o js index */}

            {itens.length > 0 ? (
                itens.map((item, index) => <p key={index}>{item}</p>)) 
            : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}

export default OutraLista