import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
    },

    render() {

        return (
            <li><Link to={this.props.url}>{this.props.title}</Link></li>
        );

    }

})