import React from 'react';

import $ from 'jquery';
import { getCookie } from '../utilities';
import { browserHistory } from 'react-router';

import RecipeEditor from './RecipeEditor';

export default React.createClass({

    saveRecipe(data) {
        var self = this;
        $.ajax({
            method: 'POST',
            // Must include CSRF token for POST request
            beforeSend: function (request) {
                request.setRequestHeader( "X-CSRFToken", getCookie('csrftoken') );
                request.setRequestHeader( "Content-Type", "application/json" );
            },
            data: JSON.stringify(data),
            dataType: 'json',
            url: '/api/recipes/',
            success: function(data) {
                browserHistory.push(`/recipe/${data.id}`);
            },
            error: function(error) {
                window.alert('Could not save recipe. Check that required fields are filled.')
            }
        });
    },

    render() {

        var emptyRecipe = {
            'title': '',
            'description': '',
            'yields': '',
            'prep_time': '',
            'cooking_time': '',
            'serve_with': '',
            'ingredients': [],
            'tags': [],
            'instructions': ''
        }
        return (
            <RecipeEditor
                recipe={emptyRecipe}
                handleSubmit={this.saveRecipe}
                allowCancel={false}
                allowDelete={false}
            />
        );
    }
});