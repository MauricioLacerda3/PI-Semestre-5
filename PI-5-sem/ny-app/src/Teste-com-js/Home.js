import React from 'react';
import Container from './Container';
import data from '../Data-javascript/Data-produto-card.js'
import '../Partes_do_site_css/produto-aba.css';
import '../Partes_do_site_css/main.css';

export default function Home()
{

    return(
        <>
            <h1 className="titulo-secao"> Produtos mais alugados </h1>
            <div>                
                <Container/>
            </div>
        </>
    )
}