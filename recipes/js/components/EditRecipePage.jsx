import React from 'react';

import $ from 'jquery';
import { getCookie } from '../utilities'
import { browserHistory } from 'react-router';

import RecipeEditor from './RecipeEditor';

export default React.createClass({

    getInitialState() {
        return ({
            loading: true,
            data: {}
        });
    },

    componentWillMount() {
        var self = this;
        $.ajax({
            url: `/api/recipes/${self.props.params.id}/`,
            success: function(data) {
                self.setState({
                    loading: false,
                    data: data,
                });
            }
        });
    },

    quitEditor() {
        browserHistory.push(`/recipe/${this.props.params.id}/`)
    },

    saveRecipe(data) {
        var self = this;
        $.ajax({
            method: 'PUT',
            // Must include CSRF token for PUT request
            beforeSend: function (request) {
                request.setRequestHeader( "X-CSRFToken", getCookie('csrftoken') );
                request.setRequestHeader( "Content-Type", "application/json" );
            },
            data: JSON.stringify(data),
            dataType: 'json',
            url: `/api/recipes/${self.props.params.id}/`,
            success: function(data) {
                browserHistory.push(`/recipe/${self.props.params.id}/`)
            },
            error: function(error) {
                window.alert('Could not save recipe. Check that required fields are filled.')
            }
        });
    },

    deleteRecipe() {
        var self = this;
        var confirmation = window.confirm('Are you sure you want to delete this recipe?');
        if (confirmation) {
            $.ajax({
                method: 'DELETE',
                // Must include CSRF token for DELETE request
                beforeSend: function (request) {
                    request.setRequestHeader( "X-CSRFToken", getCookie('csrftoken') );
                },
                url: `/api/recipes/${self.props.params.id}/`,
                success: function(data) {
                    browserHistory.push('/');
                }
            });
        }
    },

    render() {

        if (this.state.loading === true) {
            return (
                <div>
                    'Loading...'
                </div>
            );
        }
        else {
            return (
                <RecipeEditor
                    recipe={this.state.data}
                    handleSubmit={this.saveRecipe}
                    allowDelete={true}
                    handleDelete={this.deleteRecipe}
                    allowCancel={true}
                    handleCancel={this.quitEditor}
                />
            );
        }
    }

})