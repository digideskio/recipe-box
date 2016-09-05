import React from 'react';
import $ from 'jquery';
import { getCookie } from '../utilities'

import { browserHistory } from 'react-router';

import SingleRecipeEditor from './SingleRecipeEditor';

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

    toggleEditor() {
        browserHistory.push(`/recipes/${this.props.params.id}`)
    },

    saveRecipe(state) {
        // Send UPDATE to server here
        console.log(state);
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
                <SingleRecipeEditor
                    recipe={this.state.data}
                    handleCancelButton={this.toggleEditor}
                    handleSubmit={this.saveRecipe}
                    allowDelete={true}
                    handleDelete={this.deleteRecipe}
                    allowCancel={true}
                    handleCancel={this.toggleEditor}
                />
            );
        }
    }

})