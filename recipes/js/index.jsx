import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import RecipeListPage from './components/RecipeListPage';
import SingleRecipePage from './components/SingleRecipePage';
import AddRecipePage from './components/AddRecipePage';
import EditRecipePage from './components/EditRecipePage';

render(
    <Router history={browserHistory}>
        <Route path='/' component ={App}>
            <IndexRoute component={RecipeListPage}/>
            <Route path='/recipe/add' component ={AddRecipePage}/>
            <Route path='/recipe/:id' component ={SingleRecipePage}/>
            <Route path='/recipe/:id/edit' component ={EditRecipePage}/>
        </Route>
    </Router>,
    document.getElementById('app')
)