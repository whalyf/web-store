import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Vestuario from './pages/Produtos/Vestuario'
import Calcado from './pages/Produtos/Calcado'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Home}></Route>
                <Route path="/vestuario" component = {Vestuario}></Route>
                <Route path="/calcado" component = {Calcado}></Route>
            </Switch>
        </BrowserRouter>
    )
}