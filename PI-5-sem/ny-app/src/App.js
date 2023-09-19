import React from 'react';
import {Outlet} from 'react-router-dom'
//import Nav from './Teste-com-js/nav';

export default function App(){
    return(
        <div>
            <h2 className="titulo_secao"> Produtos mais alugados </h2>  
            <Outlet />      
        </div>
    )
}
