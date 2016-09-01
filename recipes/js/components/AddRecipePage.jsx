import React from 'react';
import $ from 'jquery';

import SingleRecipeEditor from './SingleRecipeEditor';
import SingleRecipeViewer from './SingleRecipeViewer';


export default React.createClass({

    saveRecipe(state) {
        // Send POST to server here
        console.log(state);
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
            'instructions': ''
        }
        return (
            <SingleRecipeEditor
                recipe={emptyRecipe}
                handleSubmit={this.saveRecipe}
            />
        );
    }
});