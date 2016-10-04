import React from 'react';
import $ from 'jquery';

import IngredientsEditor from './IngredientsEditor';
import TagsEditor from './TagsEditor';

export default React.createClass({

    propTypes: {
        recipe: React.PropTypes.object.isRequired,
        allowCancel: React.PropTypes.bool.isRequired,
        handleCancel: React.PropTypes.func,
        handleSubmit: React.PropTypes.func.isRequired,
        allowDelete: React.PropTypes.bool.isRequired,
        handleDelete: React.PropTypes.func
    },

    getInitialState() {
        var recipe = this.props.recipe;
        return ({
            title: recipe.title,
            description: recipe.description,
            yields: recipe.yields,
            //prep_time: recipe.prep_time,
            //cooking_time: recipe.cooking_time,
            serve_with: recipe.serve_with,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            notes: recipe.notes,
            tags: recipe.tags
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
            quantity: '',
            name: '',
            preparation: '',
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
        ];

        newIngredientsState[index] = {
            ...newIngredientsState[index],
            [field]: value
        };

        this.setState({
            ingredients: newIngredientsState,

        });
    },

    addTag(tag) {

        var newTagsState = [
            ...this.state.tags,
            {name: tag}
        ];

        this.setState({
            tags: newTagsState
        });

    },

    removeTag(index) {

        var tagsCopy = this.state.tags.slice(0);
        tagsCopy.splice(index, 1);
        this.setState({
            tags: tagsCopy
        });

    },

    // Save the edited recipe
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    },

    // Delete the recipe
    handleDelete(e) {
        e.preventDefault();
        this.props.handleDelete();
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

                    <label>Serve With</label>
                    <input
                        type="text"
                        name="serve_with"
                        value={this.state.serve_with}
                        onChange={this.handleFormChange} 
                    />

                    <h3 className="subhead">Ingredients</h3>

                    <IngredientsEditor
                        ingredients={this.state.ingredients}
                        addIngredientFunction={this.addIngredient}
                        removeIngredientFunction={this.removeIngredient}
                        changeIngredientFieldFunction={this.changeIngredientField}
                    />

                    <h3 className="subhead">Instructions</h3>
                    <textarea
                        name="instructions"
                        value={this.state.instructions}
                        onChange={this.handleFormChange} 
                    />

                    <h3 className="subhead">Notes</h3>
                    <textarea
                        name="notes"
                        value={this.state.notes}
                        onChange={this.handleFormChange} 
                    />

                    <h3 className="subhead">Tags</h3>

                    <TagsEditor
                        tags={this.state.tags}
                        addTagFunction={this.addTag}
                        removeTagFunction={this.removeTag}
                    />

                    <div className="buttons-container">
                        <div className="left-buttons">
                            { this.props.allowDelete ?
                                <button
                                    className="delete"
                                    onClick={this.handleDelete}
                                >
                                    <i className="fa fa-trash" aria-hidden="true" />
                                    Delete Recipe
                                </button>
                            :
                                ''
                            }
                        </div>

                        <div className="right-buttons">
                            { this.props.allowCancel ?
                                <button onClick={this.props.handleCancel}>Cancel</button>
                            :
                                ''}
                            <button
                            className="primary"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                <i className='fa fa-floppy-o' aria-hidden='true' /> Save
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }

})