import React from 'react';
import $ from 'jquery';

import IngredientEditor from './IngredientEditor';

export default React.createClass({

    propTypes: {
        ingredients: React.PropTypes.array.isRequired,
        addIngredientFunction: React.PropTypes.func.isRequired,
        removeIngredientFunction: React.PropTypes.func.isRequired,
        changeIngredientFieldFunction: React.PropTypes.func.isRequired
    },

    render() {

        console.log(this.props.ingredients);

        var removeIngredientFunction = this.props.removeIngredientFunction;
        var changeIngredientFieldFunction = this.props.changeIngredientFieldFunction;

        var ingredientEditors = this.props.ingredients.map(function (ingredient, index) {
            return (
                <IngredientEditor
                    ingredient={ingredient}
                    index={index}
                    removeIngredientFunction={removeIngredientFunction}
                    changeIngredientFieldFunction={changeIngredientFieldFunction}
                />
            )
        })

        return (
            <div>
                {ingredientEditors}
                <button onClick={this.props.addIngredientFunction}>
                    Add Ingredient
                </button>
            </div>
        );
    }

})