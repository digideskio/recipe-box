import React from 'react';
import $ from 'jquery';

export default React.createClass({

    getInitialState() {
        return ({
            data: {}
        });
    },

    componentWillMount() {

        var self = this;
        $.ajax({
            url: '/api/recipes/',
            success: function (data) {
                self.setState({data: data});
            }
        });
    },

    render() {
        return (
            <div>
                <h2>Recipe List</h2>
                {this.state.data.toString()}
            </div>
        )
    }

})