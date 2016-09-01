import React from 'react';
import RecipeThumb from './RecipeThumb';

export default React.createClass({

    propTypes: {
        recipes: React.PropTypes.array.isRequired
    },

    render() {

        var recipes = this.props.recipes;

        var recipeThumbs = recipes.map(function(recipe) {
            var recipeUrl = '/recipe/' + recipe.id;
            return (
                <RecipeThumb
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
                <div>
                    {recipeThumbs}
                </div>
            )
        }


    }

})