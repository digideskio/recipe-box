import React from 'react';
import $ from 'jquery';

export default React.createClass({

    render() {

        var recipe = this.props.data;

        var ingredients = recipe.ingredients.map(function (ingredient) {
            return 
        });

        return (
            <div>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <ul>
                    <li>Yields: {recipe.yields}</li>
                    <li>Cooking Time: {recipe.cooking_time}</li>
                    <li>Prep Time: {recipe.prep_time}</li>
                    <li>Serve With: {recipe.serve_with}</li>
                </ul>
                <h2>Ingredients</h2>
                {ingredients}
                <h2>Instructions</h2>
                <p>{recipe.instructions}</p>
            </div>
        )
    }

})