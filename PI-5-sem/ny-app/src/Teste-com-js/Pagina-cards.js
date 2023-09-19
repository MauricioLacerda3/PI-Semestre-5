import {React, useEffect, useState} from 'react';
import Card from './Card';
import data from '../Data-javascript/Data-produto-card.js'
import {useParams} from "react-router-dom";
import '../Partes_do_site_css/produtos.css';


export default function Pagina_Cards(props) {
    const{id} = useParams();

    const id_produtos = [1,2,3,4,5,6,7,8];

    const carrosel = (props.carrosel ? true : false);

    const [listaTela, setListaTela] = useState (data);
    
    const id_num = parseInt ((id ? id: props.departamento_id));
    
    useEffect(() => {
        setListaTela( data.filter(produto => {
            return produto.id_class === id_num;
        } ) );
    }, [id_num])

    let count = (carrosel ? 5:3);
    let row = [];
    let columns = [];
    let content = [];


    listaTela.map((item, index)=>{     
        if((index + 1) %count == 0) {
            columns.push(
                <Card 
                    key = {item.key}
                    item = {item}
                />
            )

            row.push(
                <div className='lista-produto'>
                    {columns}
                </div>)

            content.push(row)
            row = [];
            columns = [];
        }
        else{
            columns.push(
                <Card 
                    key = {item.key}
                    item = {item}
                />
            )
        }
    })
    return(
        <>
            {content}
        </>
    )
}