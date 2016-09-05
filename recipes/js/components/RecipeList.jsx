import React from 'react';
import RecipeListItem from './RecipeListItem';
import { Link } from 'react-router';

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
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/'>Recipe List</Link></li>
                            <li><Link to='/recipe/add'>Add Recipe</Link></li>
                        </ul>
                    </nav>
                    <div className="recipe-list">
                        {recipeListItems}
                    </div>
                </div>
            )
        }


    }

})