
import React from 'react';
import {NavLink} from "react-router-dom";

export default function Nav(){
    return(
        <>
            <nav className="dp-menu">
                <ul>
                    <li> <NavLink className="tab-button">Festas</NavLink>
                        <ul>
                            <li> <NavLink to= "pagina_card/1" > Decorações </NavLink>   </li>
                            <li> <NavLink to= "pagina_card/2"> Utensilios</NavLink>   </li>
                        </ul>
                        </li> 
                        <li> <NavLink className="tab-button">Domésticos</NavLink>
                            <ul>
                                <li> <NavLink to="pagina_card/3" >Cozinha </NavLink>  </li>
                                <li> <NavLink to="pagina_card/4" >Dia-a-dia</NavLink>   </li>
                            </ul>
                        </li> 
                        <li> <NavLink className="tab-button">Obra</NavLink>
                            <ul>
                                <li> <NavLink to="pagina_card/5" >Pesada</NavLink>   </li>
                                <li> <NavLink to="pagina_card/6" >Pequenos consertos</NavLink>   </li>
                            </ul>
                        </li>
                        <li> <NavLink className="tab-button">Carro</NavLink>
                            <ul>
                                <li> <NavLink to="pagina_card/7" >Limpeza</NavLink>   </li>
                                <li> <NavLink to="pagina_card/8" >Ferramentas</NavLink>   </li>
                            </ul>
                        </li> 
                    <li> <NavLink to="visite"> Nos visite!</NavLink>  </li> 
                </ul>
            </nav>            
        </>
    )
}
