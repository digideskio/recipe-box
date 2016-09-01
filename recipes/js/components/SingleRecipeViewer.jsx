import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

export default React.createClass({

    propTypes: {
        recipe: React.PropTypes.object.isRequired,
        handleEditButton: React.PropTypes.func.isRequired
    },

    markdownToHTML(markdown) {
        var md = new Remarkable();
        var rawMarkup = md.render(markdown);
        return { __html: rawMarkup };
    },

    render() {

        var recipe = this.props.recipe;

        var ingredients = recipe.ingredients.map(function (ingredient) {
            return (
                <li>
                    {ingredient.quantity} {ingredient.unit} {ingredient.ingredient}, {ingredient.preparation}
                </li>
            );
        });

        if ($.isEmptyObject(recipe)) {
            return 'Recipe not found...';
        }
        else {
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
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredients}
                    </ul>
                    <h3>Instructions</h3>
                    <p><span dangerouslySetInnerHTML={this.markdownToHTML(recipe.instructions)}></span></p>
                    <h3>Tags</h3>
                    <button onClick={this.props.handleEditButton}>Edit Recipe</button>
                </div>
            )
        }
    }

})