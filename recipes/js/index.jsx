import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import SingleRecipePage from './components/SingleRecipePage';

render(
    <Router history={browserHistory}>
        <Route path='/' component ={App}>
            <IndexRoute component={Home}/>
            <Route path='/recipes' component ={RecipeList}/>
            <Route path='/recipe/:id' component ={SingleRecipePage}/>
        </Route>
    </Router>,
    document.getElementById('app')
)