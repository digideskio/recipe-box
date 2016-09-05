import React from 'react';
import $ from 'jquery';

import { browserHistory } from 'react-router';

import SingleRecipeViewer from './SingleRecipeViewer';

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
        browserHistory.push(`/recipe/${this.props.params.id}/edit`);
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
                <SingleRecipeViewer
                    recipe={this.state.data}
                    handleEditButton={this.toggleEditor}
                />
            );
        }
    }

})