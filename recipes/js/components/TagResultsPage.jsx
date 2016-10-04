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
            url: `/api/bytag/?id=${self.props.params.id}`,
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
                        recipes={this.state.data.recipes}
                        header={`Recipes Filed Under: ${this.state.data.tag_name}`}
                    />
                </div>
            )
        }

    }
})