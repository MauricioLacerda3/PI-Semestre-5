import {React, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom'

export default function Card(props) {
    return(
        <>
            <div className= "produto_quadro">
                <img src= {props.item.imagem} alt = '' width = '100px' height = '100px'/>

                <h3 className= "produto_quadro_h3"> {props.item.name} </h3>
                <p className= "produto_quadro_p"> R$ {props.item.preco} </p>
                <NavLink className= "produto_quadro_button" to= {`/pagina_produto/${props.item.key}`}> Ver detalhes </NavLink>
            </div> 
        </>
    )
}

/*export default function Card() {
    return (
        <div className="card">
            <img src="" />
            <h3 style="styles.title"></h3>
            <p style="styles.price">Valor do produto</p>
            <form action="Partes_do_site/Produtos/obra/Produto-obra- (6).html" method="get" target="_blank">
                <button type="submit">
                    Ver detalhes
                </button>
            </form>
        </div>

    )
} */