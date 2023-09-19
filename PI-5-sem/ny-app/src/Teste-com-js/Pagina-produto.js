import {React, useState} from 'react';
import Card from './Card';
import dataP from '../Data-javascript/Data-produto-card.js'
import data from '../Data-javascript/Data-produto.js'
import {NavLink, useParams} from "react-router-dom";
import Pagina_Cards from './Pagina-cards.js';
import '../Partes_do_site_css/main.css';
import '../Partes_do_site_css/produtos.css';
import '../Partes_do_site_css/produto-aba.css';

export default function Pagina_Produto(props) {
    const {id_produto} = useParams();

    let produto = data.find(produto => {
        return produto.key == id_produto
    });

    import(`./Imagens/Imagens-produtos/carro/Screenshot_1.png`).then((data) => {
        console.log(typeof(data));
    });

    const produto_pagina = (
            <>
                <div className="produto-geral"> 
                    <div className="produto-info">
                        <img src = {produto.image}style = {{backgroundImage: "logo.svg"}} alt = '' width = '100px' height = '100px'/>
                        <section>
                            <h2> {produto.name} </h2>
                            <div className="periodo">
                                <h2> Período de aluguel: </h2>
                                <textarea id="textarea-dia" name="textarea" maxLength="2" minLength="1" rows="1"></textarea>
                                <p>Dia(s)</p>
                            </div>
                            <h3> Compare com o mercado: </h3>
                            <ul>
                                <li> 
                                    <NavLink to= {`${produto.site.link1}`} > <img src= {produto.site.image1} alt = '' width = '100px' height = '100px'/> </NavLink>
                                </li>
                                <li> 
                                    <NavLink to= {`${produto.site.link2}`} > <img src= {produto.site.image2} alt = '' width = '100px' height = '100px'/> </NavLink>
                                </li>
                            </ul>                         
                        </section>
                        
                    </div>
                    <div className="preco">
                        <h2> R$ {produto.preco} </h2>
                        
                        <div>
                            <textarea id="textarea" name="textarea" maxLength="8" minLength="8" rows="1"></textarea> <button> OK! </button>
                        </div>

                        <form id = "alugue" action="../../../Partes_do_site/compra.html" method="get" target="_blank">
                            <button type="submit"> Alugue! </button>
                        </form>

                        <p> {produto.descricao} </p>
                    </div>
                </div> 
            </>
        )

    return(
        <>
            <div>
                {produto_pagina}
            </div>
            
            <div>
                <h2 className="titulo-mais"> Produtos mais alugados da seção: </h2>
                <Pagina_Cards departamento_id= {produto.id_class}/>
            </div>
            
        </>
    )
}

