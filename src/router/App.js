// Node Modules imports
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENT-LAYOUT imports
import Home from '../layout/Home';
import NotFound from '../layout/NotFound';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/css/App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>  
                <Route path="*">
                    <NotFound />
                </Route>                
            </Switch>
        </BrowserRouter>
    );
}

export default App;