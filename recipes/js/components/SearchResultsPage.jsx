import React from 'react';
import $ from 'jquery';

import Loader from './Loader';
import RecipeList from './RecipeList';
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
            url: `/api/search/?q=${self.props.params.q}`,
            success: function (data) {
                self.setState({
                    loading: false,
                    data: data,
                });
            }
        });
    },

    render() {

        var self = this;

        if (this.state.loading) {
            return (
                <Loader/>
            )
        }

        else {
            return (
                <div className="narrow-container">

                    <RecipeList
                        recipes={this.state.data}
                        header={`Search Results For: ${self.props.params.q}`}
                    />
                </div>
            )
        }

    }
})