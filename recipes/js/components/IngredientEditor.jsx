import React from 'react';
import $ from 'jquery';

import IngredientEditor from './IngredientEditor';

export default React.createClass({

    propTypes: {
        ingredient: React.PropTypes.object.isRequired,
        index: React.PropTypes.number.isRequired,
        removeIngredientFunction: React.PropTypes.func.isRequired,
        changeIngredientFieldFunction: React.PropTypes.func.isRequired
    },

    remove(e) {
        e.preventDefault();
        this.props.removeIngredientFunction(this.props.index);
    },

    changeField(e) {
        this.props.changeIngredientFieldFunction(e.target.name,this.props.index, e.target.value);
    },

    render() {

        return (
            <div className="ingredient">
                <label>Quantity</label>
                <input
                    type="text"
                    name="quantity"
                    value={this.props.ingredient.quantity}
                    onChange={this.changeField}
                />

                <label>Unit</label>
                <input
                    type="text"
                    name="unit"
                    value={this.props.ingredient.unit}
                    onChange={this.changeField}
                />

                <label>Ingredient</label>
                <input
                    type="text"
                    name="ingredient"
                    value={this.props.ingredient.ingredient}
                    onChange={this.changeField}
                />

                <label>Preparation</label>
                <input
                    type="text"
                    name="preparation"
                    value={this.props.ingredient.preparation}
                    onChange={this.changeField}
                />
                <button
                    onClick={this.remove}
                >
                    Remove This Ingredient
                </button>
            </div>
        );

    }

})