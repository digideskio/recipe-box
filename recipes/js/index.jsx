import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import SingleRecipePage from './components/SingleRecipePage';
import AddRecipePage from './components/AddRecipePage';
import EditRecipePage from './components/EditRecipePage';
import TagResultsPage from './components/TagResultsPage';
import SearchResultsPage from './components/SearchResultsPage';

render(
    <Router history={browserHistory}>
        <Route path='/' component ={App}>
            <IndexRoute component={HomePage}/>
            <Route path='/recipe/add' component ={AddRecipePage}/>
            <Route path='/recipe/:id' component ={SingleRecipePage}/>
            <Route path='/recipe/:id/edit' component ={EditRecipePage}/>
            <Route path='/tag/:id' component ={TagResultsPage}/>
            <Route path='/search/:q' component ={SearchResultsPage}/>
            <Route path='*' component ={HomePage}/>
        </Route>
    </Router>,
    document.getElementById('app')
)