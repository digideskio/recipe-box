import React from 'react';
import $ from 'jquery';

import IngredientsEditor from './IngredientsEditor';

export default React.createClass({

    propTypes: {
        recipe: React.PropTypes.object.isRequired,
        allowCancel: React.PropTypes.bool.isRequired,
        handleCancelButton: React.PropTypes.func.isRequired,
        handleSubmit: React.PropTypes.func.isRequired,
        allowDelete: React.PropTypes.bool.isRequired,
        handleDelete: React.PropTypes.func.isRequired
    },

    getInitialState() {
        var recipe = this.props.recipe;
        return ({
            title: recipe.title,
            description: recipe.description,
            yields: recipe.yields,
            prep_time: recipe.prep_time,
            cooking_time: recipe.cooking_time,
            serve_with: recipe.serve_with,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        });
    },

    // Handles changes from form fields, excluding ingredient fields
    handleFormChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    },

    addIngredient(e) {
        e.preventDefault();
        var newIngredients = this.state.ingredients.concat([{
            ingredient: '',
            preparation: '',
            quantity: '',
            unit: ''
        }]);
        this.setState({
            ingredients: newIngredients
        })
    },

    removeIngredient(index) {
        var ingredientsCopy = this.state.ingredients.slice(0);
        ingredientsCopy.splice(index, 1);
        this.setState({
             ingredients: ingredientsCopy
        })
    },

    // Handles changes to ingredient fields bubbled up from IngredientEditor component
    changeIngredientField(field, index, value) {

        var newIngredientsState = [
            ...this.state.ingredients,
        ]

        newIngredientsState[index] = {
            ...newIngredientsState[index],
            [field]: value
        }

        this.setState({
            ingredients: newIngredientsState
        })
    },

    // Save the edited recipe
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    },

    render() {
        return (
            <div className="recipe-editor narrow-container">
                <form onSumbit={this.handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleFormChange}
                    />

                    <label>Description</label>
                    <textarea
                        name="description"
                        value={this.state.description} 
                        onChange={this.handleFormChange}
                    />

                    <label>Yields</label>
                    <input
                        type="text"
                        name="yields"
                        value={this.state.yields}
                        onChange={this.handleFormChange}
                    />

                    <label>Prep Time</label>
                    <input
                        type="text"
                        name="prep_time"
                        value={this.state.prep_time}
                        onChange={this.handleFormChange}
                    />

                    <label>Cooking Time</label>
                    <input
                        type="text"
                        name="cooking_time"
                        value={this.state.cooking_time}
                        onChange={this.handleFormChange} 
                    />

                    <label>Serve With</label>
                    <input
                        type="text"
                        name="serve_with"
                        value={this.state.serve_with}
                        onChange={this.handleFormChange} 
                    />

                    <label>Ingredients</label>
                    <IngredientsEditor
                        ingredients={this.state.ingredients}
                        addIngredientFunction={this.addIngredient}
                        removeIngredientFunction={this.removeIngredient}
                        changeIngredientFieldFunction={this.changeIngredientField}
                    />

                    <label>Instructions</label>
                    <textarea
                        name="serve_with"
                        value={this.state.instructions}
                        onChange={this.handleFormChange} 
                    />

                    <input
                        type="submit"
                        value="Save"
                        onClick={this.handleSubmit}
                    />
                    <button onClick={this.props.handleCancelButton}>Cancel</button>
                    <button>Delete Recipe</button>
                </form>
            </div>
        );
    }

})