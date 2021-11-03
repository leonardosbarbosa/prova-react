import React from "react"
import { Route, Switch } from "react-router"

import Home from './pages/Home/Home'
import Blocks from './pages/Blocks/Blocks'
import Cards from './pages/Cards/Cards'
import Forms from './pages/Forms/Forms'
import Pricing from './pages/Pricing/Pricing'




export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/pricing" component={Pricing}/>
        </Switch>
    )
}