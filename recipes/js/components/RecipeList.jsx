import React from 'react';
import $ from 'jquery';

import { Link } from 'react-router';

export default React.createClass({

    getInitialState() {
        return ({
            loading: true,
            data: []
        });
    },

    componentWillMount() {

        var self = this;
        $.ajax({
            url: '/api/recipes/',
            success: function (data) {
                console.log(data);
                self.setState({
                    loading: false,
                    data: data,
                });
            }
        });
    },

    render() {

        var content = null;

        console.log(this.state.data);

        var listOfRecipes = this.state.data.map(function(recipe) {
            var recipeUrl = '/recipe/' + recipe.id
            return (
                <li>
                    <Link to={recipeUrl}>
                        {recipe.title}
                    </Link>
                </li>
            );
        });

        if (this.state.loading) {
            content = 'Loading...';
        }
        else {
            if (this.state.data.length === 0) {
                content = 'No recipes to display.';
            }
            else {
                content = listOfRecipes;
            }
        }

        return (
            <div>
                <h2>Recipe List</h2>
                {content}
            </div>
        )
    }

})