import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import RecipeList from './components/RecipeList';

render(
    <Router history={browserHistory}>
        <Route path='/' component ={App}>
            <IndexRoute component={Home}/>
            <Route path='/recipes' component ={RecipeList}/>

        </Route>
    </Router>,
    document.getElementById('app')
)