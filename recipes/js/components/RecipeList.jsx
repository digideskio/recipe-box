import React from 'react';
import RecipeListItem from './RecipeListItem';

import { Link } from 'react-router';

export default React.createClass({

    propTypes: {
        recipes: React.PropTypes.array.isRequired,
        header: React.PropTypes.string
    },

    render() {

        var recipes = this.props.recipes;

        var recipeListItems = recipes.map(function(recipe) {
            var recipeUrl = '/recipe/' + recipe.id;
            return (
                <RecipeListItem
                    title={recipe.title}
                    url={recipeUrl}
                    key={recipe.id}
                />
            );
        });

        if (recipes.length === 0) {
            return (
                <div className="recipe-list">
                    <h1>No Matching Recipes</h1>
                </div>
            )
        }
        else {
            return (
                <div className="recipe-list">

                    <h1>{this.props.header}</h1>
                    {recipeListItems}

                </div>
            )
        }


    }

})