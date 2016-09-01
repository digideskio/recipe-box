import React from 'react';
import $ from 'jquery';

import SingleRecipeEditor from './SingleRecipeEditor';
import SingleRecipeViewer from './SingleRecipeViewer';


export default React.createClass({

    getInitialState() {
        return ({
            loading: true,
            editing: false,
            data: {}
        });
    },

    componentWillMount() {

        var self = this;
        $.ajax({
            url: '/api/recipes/' + self.props.params.id + '/',
            success: function(data) {
                self.setState({
                    loading: false,
                    data: data,
                });
            }
        });
    },

    toggleEditor() {
        this.setState({editing: !this.state.editing});
    },

    saveRecipe(state) {
        // Send UPDATE to server here
        console.log(state);
    },

    render() {

        if (this.state.loading === true) {
            return (
                <div>
                    'Loading...'
                </div>
            );
        }
        if (this.state.editing === true) {
            return (
                <SingleRecipeEditor
                    recipe={this.state.data}
                    handleCancelButton={this.toggleEditor}
                    handleSubmit={this.saveRecipe}
                />
            );
        }
        else {
            return (
                <SingleRecipeViewer
                    recipe={this.state.data}
                    handleEditButton={this.toggleEditor}
                />
            );
        }
    }

})