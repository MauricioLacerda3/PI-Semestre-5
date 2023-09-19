import React from 'react';
import Layout from './Teste-com-js/Layout.js';
import Home from './Teste-com-js/Home.js';
import Pagina_Card from './Teste-com-js/Pagina-cards.js'
import Pagina_Produto from './Teste-com-js/Pagina-produto.js'
import { createRoot } from 'react-dom/client';
import Erro from './Teste-com-js/Pagina_erro.js'
//import Nav from './Teste-com-js/nav';
import './Partes_do_site_css/main.css';
import './Partes_do_site_css/produtos.css';
import './Partes_do_site_css/aluguel.css';
import './Partes_do_site_css/finalizar.css';
import './Partes_do_site_css/locais.css';
import Visite from './Teste-com-js/visite.js';

import {BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

const domNode = document.getElementById('root')
const root = createRoot(domNode);
root.render(<App />);

/* ReactDOM.render(
  <App />,
  document.getElementById('root')
); */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path = "pagina_card/:id" element= {<Pagina_Card />} />
          <Route  path = "pagina_produto/:id_produto" element= {<Pagina_Produto />} />
          <Route path = "visite" element= {<Visite />} />
          <Route path = "?" element= {<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


// Home -> Página inicial
// pagina_card -> Página dos cards dos produtos de cada seção
// pagina_produto -> Aba do produto selecionado


/*
const router = createBrowserRouter([
    createRoutesFromElements(
      <Router>    
        <Routes>
            <Route key= "0" path = "/" element= {<App />} errorElement= {<Erro />} />
            <Route key= "1" path = "*" relative="path" element= {<Home />} />
            <Route key= "2" path = "pagina_card/:id" relative="path" element= {<Card />} />
            <Route key= "3" path = "pagina_produto/:id" relative="path" element= {<Produto />} />
        </Routes>
        </Router>
    )
    /*{
        path: "/", 
        element:<App />,
        //errorElement: <Erro />,
        children:[
            {
                path: "/", 
                element:<Home />
            },
            {
                path: "pagina_card/:id", 
                element:<Card />
            },
            {
                path: "pagina_produto/:id", 
                element:<Produto />
            },
        ]
    },

])




*/