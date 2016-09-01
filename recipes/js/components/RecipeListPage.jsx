import React from 'react';
import $ from 'jquery';

import RecipeList from './RecipeList';

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

        if (this.state.loading) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <RecipeList recipes={this.state.data}/>
            )
        }
    }
})