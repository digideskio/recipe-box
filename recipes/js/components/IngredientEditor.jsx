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
                <div className="fields">
                    <label>Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        value={this.props.ingredient.quantity}
                        onChange={this.changeField}
                    />

                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.props.ingredient.name}
                        onChange={this.changeField}
                    />

                    <label>Preparation</label>
                    <input
                        type="text"
                        name="preparation"
                        value={this.props.ingredient.preparation}
                        onChange={this.changeField}
                    />
                </div>
                <div className="remove-button-wrapper">
                    <i
                        className="remove-button fa fa-minus-circle"
                        onClick={this.remove}
                    />
                </div>
            </div>
        );

    }

})