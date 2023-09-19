import React from 'react';
import Container from './Container';
import data from '../Data-javascript/Data-produto-card.js'
import Nav from './nav.js';
import { Outlet, NavLink} from 'react-router-dom';


const Layout = () => {
    return(
        <>  
            <header>
                <NavLink to="/" className="logo"> <img src= "./Imagens/Logo-_AlugTudo.svg" alt="" width = '100px' height = '100px'/> </NavLink> 
                <NavLink to="/"> Login </NavLink>               
            </header>      
            <div> 
                <Nav />
                
                <Outlet />
            </div>
        </>
    )
}

export default Layout;
