import React from 'react';
import RecipeListItem from './RecipeListItem';

export default React.createClass({

    propTypes: {
        recipes: React.PropTypes.array.isRequired
    },

    render() {

        var recipes = this.props.recipes;

        var recipeListItems = recipes.map(function(recipe) {
            var recipeUrl = '/recipe/' + recipe.id;
            return (
                <RecipeListItem
                    title={recipe.title}
                    url={recipeUrl}
                />
            );
        });

        if (recipes.length === 0) {
            return (
                <div>
                    No Recipes Yet!
                </div>
            )
        }
        else {
            return (
                <div className="recipe-list">
                    {recipeListItems}
                </div>
            )
        }


    }

})