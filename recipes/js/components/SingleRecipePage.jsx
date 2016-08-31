import React from 'react';
import $ from 'jquery';

import SingleRecipe from './SingleRecipe'

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

        if (this.state.loading === true) {
            content = 'Loading...';
        }
        else {
            if ($.isEmptyObject(this.state.data)) {
                content = 'No recipe found...';
            }
            else {
                content = <SingleRecipe data={this.state.data}/>;
            }
        }

        return (
            <div>
                {content}
            </div>
        )
    }

})