import React from 'react';
import Layout from './Layout.js';
import Home from './Home.js';
import Card from './Pagina-cards.js'
import Produto from './Pagina-produto.js'
import * as ReactDOM from 'react-dom';
//import Erro from './Erro'
//import Nav from './nav';
import {BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";


/* const root = React.createRoot(document.getElementById('root'))
root.render(App) */

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path = "pagina_card" element= {<Card />} />
          <Route path = "pagina_produto" element= {<Produto />} />
          <Route path = "visite" element= {<Home/>} />
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