import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

function App() {
    return (
        <StylesProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/pricing' component={Pricing} />
                </Switch>
            </Router>
        </StylesProvider>
    )

}

export default App;