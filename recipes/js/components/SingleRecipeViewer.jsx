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
                    {ingredient.quantity} {ingredient.unit} {ingredient.ingredient}
                    {/* append a comma if ingredient includes preparation */ }
                    { ingredient.preparation ? ', ' + ingredient.preparation : ''}
                </li>
            );
        });

        if ($.isEmptyObject(recipe)) {
            return 'Recipe not found...';
        }
        else {
            return (
                <div className="recipe-viewer narrow-container">
                    <h1 className="title">{recipe.title}</h1>
                    <div className="divider"></div>
                    { recipe.description ?
                        <div>
                            <p className="description">{recipe.description}</p>
                            <div className="divider"></div>
                        </div>
                    :
                    ''
                    }
                    <div className="yields">{recipe.yields}</div>
                    <ul>
                        <li>Cooking Time: {recipe.cooking_time}</li>
                        <li>Prep Time: {recipe.prep_time}</li>
                    </ul>
                    <h3 className="subhead">Ingredients</h3>
                    <ul className="ingredients">
                        {ingredients}
                    </ul>
                    <h3 className="subhead">Instructions</h3>
                    <p className="instructions">
                        <span dangerouslySetInnerHTML={this.markdownToHTML(recipe.instructions)}></span>
                    </p>
                    <p>Serve With: {recipe.serve_with}</p>
                    <h3 className="subhead">Tags</h3>
                    <div className="divider"></div>
                    <div className="buttons-wrapper">
                        <button onClick={this.props.handleEditButton}>Edit Recipe</button>
                    </div>
                </div>
            )
        }
    }

})