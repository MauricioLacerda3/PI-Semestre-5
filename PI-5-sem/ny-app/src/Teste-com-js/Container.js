import React from 'react';
import Card from './Card';
import data from '../Data-javascript/Data-produto-card.js'
import Pagina_Cards from './Pagina-cards.js';
import {useParams} from 'react-router-dom'
import '../Partes_do_site_css/main.css';

const Container = (props) => {
    return(
        <>
            <div className="container">
                <h2 className="titulo-secao"> Produtos mais alugados de <p> Decorações </p> </h2>
                <div className="lista_aluga">
                    <Pagina_Cards departamento_id= "1" carrosel= "true"   />
                </div>
                <h2 className="titulo-secao"> Produtos mais alugados de <p> Utensilios </p> </h2>
                <div className="lista_aluga">
                    <Pagina_Cards carrosel= "true"  departamento_id= "2" />
                </div>

                <h2 className="titulo-secao"> Produtos mais alugados de <p> Dia-a-dia </p> </h2>
                <div className="lista_aluga">
                    <Pagina_Cards carrosel= "true"  departamento_id= "4" />
                </div>

                <h2 className="titulo-secao"> Produtos mais alugados de <p> Ferramentas </p> </h2>
                <div className="lista_aluga">
                    <Pagina_Cards departamento_id= "8" carrosel= "true"   />
                </div>
            </div>
        </>
    )
}

export default Container;