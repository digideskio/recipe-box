import React from 'react';
import $ from 'jquery';

import { browserHistory } from 'react-router';

import Loader from './Loader';
import SingleRecipeViewer from './SingleRecipeViewer';

export default React.createClass({

    getInitialState() {
        return ({
            loading: true,
            notFound: false,
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
            },
            error: function(error) {
                self.setState({
                    loading: false,
                    notFound: true
                })
            }
        });
    },

    toggleEditor() {
        browserHistory.push(`/recipe/${this.props.params.id}/edit`);
    },

    render() {

        if (this.state.loading === true) {
            return (
                <Loader/>
            );
        }
        else if (this.state.notFound === true) {
            return (
                <div className="recipe-viewer">
                    <h1 className="not-found">Recipe Not Found</h1>
                </div>
            )
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